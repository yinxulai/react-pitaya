import autobind from '../autobind'
import hash from '../../utils/hash';
import { Listener } from '../listener'
import { IProps as MessageProps } from '../../components/message'


// 存储和管理消息
export class Controller extends Listener {

  // 消息列表
  messageMap: Map<string, MessageProps> = new Map() // Map 结构
  get messageList() { return Array.from(this.messageMap.values()) } 

  @autobind
  open(message: MessageProps, lifeTime = 2000) {
    const uniqueID = hash(message)
    this.messageMap.set(uniqueID, message)
    this.delayRemoval(uniqueID, lifeTime)
    this.dispatchSubscribers()
  }

  @autobind
  info(context: React.ReactNode) {
    this.open({ type: 'info', context }, 2000)
  }

  @autobind
  success(context: React.ReactNode) {
    this.open({ type: 'success', context }, 2000)
  }

  @autobind
  warning(context: React.ReactNode) {
    this.open({ type: 'warning', context }, 3000)
  }

  @autobind
  error(context: React.ReactNode) {
    this.open({ type: 'error', context }, 4000)
  }

  //延时删除
  @autobind
  delayRemoval(id: string, lifeTime: number) {
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
