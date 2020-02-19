import React from 'react'
import Title from '../title'
import { stack as getStack } from '../../utils'
import Container, { IProps as BaseProps } from '../container'
import style from './style.less'

export type Type = 'info' | 'error' | 'success' | 'warning'

export function isMessageProps(data: any): data is IProps {
  const { type, context } = data || {}
  if (type && context) return true
  return false
}

export interface IProps extends BaseProps {
  type: Type
  context: React.ReactNode

  statusCode?: string | number // 状态码
  error?: string // 错误信息
  stack?: string // 堆栈信息
}

const Stack: React.FC<{ stack?: string }> = props => {
  const [stackShow, setStackShow] = React.useState(false)
  const stack = props.stack
  if (!stack) { return null }

  return (
    <Container className={[style.stackSwitch]}>
      <Container
        className={[style.switchButton]}
        onClick={() => setStackShow(!stackShow)}
      >
        {stackShow ? '-->收起详细信息<--' : '-->展开详细信息<--'}
      </Container>

      {stackShow && (
        <Container className={[style.stack]}>
          <pre>{stack}</pre>
        </Container>
      )}
    </Container>
  )
}

export const Message: React.FC<React.PropsWithChildren<IProps>> = props => {
  let { type, context, statusCode, error, stack } = props
  // 如果 type 是 error 自动获取当前的 call stack
  type === 'error' && (stack = stack || getStack(4, 20))

  // const titleString = statusCode ? `${statusCode}: ${type}` : type

  return (
    <Container className={[style.message, props.className, style[type]]} style={[props.style]}>
      <Title className={[style[type]]} level={5} title={type} />
      <Container className={[style.context]} >{context}</Container>
      <Container className={[style.error]}>{error}</Container>
      <Stack stack={stack} />
    </Container>
  )
}

export default Message
