import React from 'react'
import style from './style.less'
import { stack as getStack } from '../../utils'
import Message from '../../components/message'
import BaseContainer from '../../components/container'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import defaultController, { Controller, ToaserMessageOptions } from './controller'


export interface IProps {
  controller?: Controller
  stack?: boolean | number // 是否显示错误栈信息，输入数字调整裁剪的栈顶长度
}

export interface IState {
  toasers: ToaserMessageOptions[]
}

export default class Container extends React.Component<IProps, IState> {

  // 取消订阅
  cancelListener!: Function

  componentDidMount() {
    // 装载一下
    this.setState({ toasers: this.controller.toaserList })
    // 监听后续变动
    this.cancelListener = this.controller.addListener(() => {
      this.setState({ ...this.state, toasers: this.controller.toaserList })
    })  // 订阅
  }

  // 取消订阅
  componentWillUnmount() {
    this.cancelListener && this.cancelListener()
  }

  get controller() {
    return this.props.controller || defaultController
  }

  get toasers() {
    const { toasers } = this.state || {}
    const { stack = 3 } = this.props

    // 处理错误栈信息
    return (toasers || []).map(message => {
      if (message.type === 'error') {
        if (stack === false) {
          return message// 不显示错误栈信息
        }
        if (stack === true) {
          // 根据默认值 3-7 显示
          message.stack = getStack(3, 7)
          return message
        }

        // 根据指定位置显示
        message.stack = getStack(stack, stack + 4)
        return message
      }
      return message
    })
  }

  get animationClassNames() {
    return {
      appear: style.appear,
      appearActive: style.appearActive,
      appearDone: style.appearDone,
      enter: style.enter,
      enterActive: style.enterActive,
      enterDone: style.enterDone,
      exit: style.exit,
      exitActive: style.exitActive,
      exitDone: style.exitDone,
    }
  }

  render() {
    return (
      <BaseContainer className={[style.container]}>
        <TransitionGroup className={style.list}>
          {
            this.toasers.map(message => (
              <CSSTransition key={message.id} classNames={this.animationClassNames} timeout={200} >
                <BaseContainer className={[style.item]} onMouseMove={message.delayRemoval}>
                  <Message {...message} />
                </BaseContainer>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </BaseContainer>
    )
  }
}
