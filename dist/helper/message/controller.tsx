import React from 'react';
import autobind from '../autobind'
import { insert } from '../overlay'
import { Listener } from '../listener'
import { Container } from './container'
import { IProps as MessageProps } from '../../components/message'

export class Controller extends Listener {
  // 挂载 Overlay
  static isMountOnOverlay: boolean = false
  static mountOnOverlay() {
    if (!Controller.isMountOnOverlay) {
      insert({
        isFixed: true,
        isShowMask: false,
        enableCloseByMask: false,
        render: (_: any) => <Container />
      })
    }
    Controller.isMountOnOverlay = true
  }

  lastID = 0
  messageMap: Map<number, MessageProps> = new Map()

  get messages() {
    return Array.from(this.messageMap.values())
  }

  @autobind
  open(message: MessageProps, lifeTime = 2000) {
    Controller.mountOnOverlay()
    this.messageMap.set(++this.lastID, message)
    this.delayRemoval(this.lastID, lifeTime)
    this.dispatchSubscribers()
  }

  @autobind
  info(context: MessageProps['context']) {
    this.open({ type: 'info', context }, 2000)
  }

  @autobind
  success(context: MessageProps['context']) {
    this.open({ type: 'success', context }, 2000)
  }

  @autobind
  warning(context: MessageProps['context']) {
    this.open({ type: 'warning', context }, 3000)
  }

  @autobind
  error(context: MessageProps['context']) {
    this.open({ type: 'error', context }, 4000)
  }

  @autobind
  delayRemoval(id: number, lifeTime: number) {
    setTimeout(() => {
      this.messageMap.delete(id)
      this.dispatchSubscribers()
    }, lifeTime)
  }
}

const controller = new Controller()
const { open, info, error, success, warning } = controller
export { open, info, error, success, warning }
export default controller
