import React from 'react'
import style from './style.less'
import Message from '../../components/message'
import BaseContainer from '../../components/container'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import defaultController, { Controller, ToaserMessageOptions } from './controller'

export interface IProps {
  controller?: Controller
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

  // 延迟当前消息销毁
  continuedLife() {

  }

  get controller() {
    return this.props.controller || defaultController
  }

  get toasers() {
    const { toasers } = this.state || {}
    return toasers || []
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
            this.toasers.map((message, index) => (
              <CSSTransition key={String(index)} classNames={this.animationClassNames} timeout={200} >
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
