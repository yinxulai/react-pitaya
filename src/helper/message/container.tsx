import React from 'react'
import style from './style.less'
import RootContainer from '../../components/container'
import defaultController, { Controller } from './controller'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Message, { IProps as MessageProps } from '../../components/message'

export interface IProps {
  controller?: Controller
}

export interface IState {
  messages: MessageProps[]
}

export class Container extends React.Component<IProps, IState> {

  // 取消订阅
  cancelListener: () => any

  constructor(props: IProps) {
    super(props)
    this.cancelListener = this.controller.addListener(() => {
      this.setState({ messages: this.controller.messages })
    })  // 订阅
  }

  componentWillUnmount() {
    this.cancelListener && this.cancelListener()
  }

  get controller() {
    return this.props.controller || defaultController
  }

  get messages() {
    const { messages } = this.state || {}
    return messages || []
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
      <RootContainer className={[style.container]}>
        {/* <TransitionGroup className={style.list}> */}
        {
          this.messages.map((message, index) => (
            <Message {...message} />
            // <CSSTransition key={String(index)} classNames={this.animationClassNames} timeout={200} >
            //   <Message {...message} />
            // </CSSTransition>
          ))
        }
        {/* </TransitionGroup> */}
      </RootContainer>
    )
  }
}
