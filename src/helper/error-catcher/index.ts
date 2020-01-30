import autobind from '../autobind'
import { error, success } from '../message'

export type ErrorKey = string | number | symbol //TODO: 支持 正则
export type ErrorRender = (...args: any[]) => string
export type ErrorMap = Map<ErrorKey, string | ErrorRender>

class ErrorCatcher {
    globalErrorMap: ErrorMap = new Map()

    @autobind
    addError(error: ErrorMap) {
        error.forEach((errorMap, errorKey) => {
            if (this.globalErrorMap.get(errorKey)) {
                console.warn(`[error-catcher:addError]:添加重复的 error map, key: ${errorKey.toString()} \n`)
            }
            this.globalErrorMap.set(errorKey, errorMap)
        })
    }

    @autobind
    successHandler(res: any, errorMap: ErrorMap) {
        if (!res) { return }

        const data = res && res.data
        const state = data && data.state

        // 优先取用户自定义的
        if (state && errorMap.get(state)) {
            return success(errorMap.get(state))
        }
        // 其次尝试读取 message
        if (data && data.message) {
            return success(data.message)
        }
    }

    @autobind
    failureHandler(err: any, errorMap: ErrorMap) {
        if (!err) { return }
        const data = err.response.data
        const state = data && data.state

        // 优先取用户自定义的
        if (state && errorMap.get(state)) {
            return error(errorMap.get(state))
        }

        // 如果有栈信息就打印
        if (data && data.stack) {
            console.error(data.stack)
        }

        // 其次尝试读取 message
        if (data && data.message) {
            return error(data.message)
        }
    }

    @autobind
    catch(errorMap?: ErrorMap) {
        const self = this
        const localErrorMap = !errorMap ? self.globalErrorMap
            : new Map([...self.globalErrorMap.entries(), ...errorMap.entries()])

        return function (target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
            const original = Reflect.get(target, propertyKey)

            if (!(original instanceof Function)) {
                console.warn(`[error-catcher:catch]: 无法装饰非 Function 对象, key: ${propertyKey.toString()} \n`)
                return
            }

            const successHandler = function (res: any) {
                console.log('successHandler')
                return self.successHandler(res, localErrorMap)
            }

            const failureHandler = function (err: any) {
                console.log('failureHandler')
                return self.failureHandler(err, localErrorMap)
            }

            const functionWrap = function (...params: any[]) {
                console.log(`run ${propertyKey.toString()} wrap...`)
                const runResult = Reflect.apply(original, target, params)
                if (!(runResult instanceof Promise)) { return runResult }
                runResult.then(successHandler, failureHandler)
                return runResult
            }

            descriptor.value = functionWrap

            // TODO: 不知道为什么用 Reflect.defineProperty 或 Reflect.set 不会成功、返回 true 但是实际调用时还是原来的
            // const reviseState = Reflect.defineProperty(target, propertyKey, {
            //     ...descriptor,
            //     value: functionWrap
            // })

            // console.log(descriptor.value, functionWrap)
            // console.log(reviseState)

            // if (!reviseState) {
            //     console.warn(`[error-catcher:catch]: 装饰失败, key: ${propertyKey.toString()}`)
            //     return
            // }
        }
    }
}

export const errorCatcher = new ErrorCatcher()
export default errorCatcher.catch

