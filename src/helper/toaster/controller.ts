import autobind from '../autobind'
import { Listener } from '../listener'
import { stack, hash } from '../../utils';
import { IProps as MessageProps, Type } from '../../components/message'


export interface ToaserMessageOptions extends MessageProps {
  delayRemoval: () => void
}

// 跟原始 isMessageProps 的相比少了 type 的判断
function isMessageProps(data: any): data is MessageProps {
  if (!data) { return false }
  if (data.context) { return true }
  if (data.statusCode || data.error || data.stack) { return true }

  return false
}

// 存储和管理消息
export class Controller extends Listener {

  removalMap: Map<string, number> = new Map() // 待移除的列表
  toaserMap: Map<string, ToaserMessageOptions> = new Map()  // 消息列表
  get toaserList() { return Array.from(this.toaserMap.values()) }

  @autobind
  open(type: Type = 'info', options: MessageProps | React.ReactNode, lifeTime = 2000) {
    // 加入堆栈确保确实是唯一性
    const uniqueID = hash(options, stack(2, 4))
    const delayRemoval = () => this.delayRemoval(uniqueID, lifeTime)

    if (isMessageProps(options)) {
      this.toaserMap.set(uniqueID, { ...options, delayRemoval, type })
    } else {
      this.toaserMap.set(uniqueID, { context: options, delayRemoval, type })
    }

    this.delayRemoval(uniqueID, lifeTime)
    this.dispatchSubscribers()
  }

  @autobind
  info(options: Omit<MessageProps, 'type'> | React.ReactNode) {
    this.open('info', options, 2000)
  }

  @autobind
  success(options: Omit<MessageProps, 'type'> | React.ReactNode) {
    this.open('success', options, 2000)
  }

  @autobind
  warning(options: Omit<MessageProps, 'type'> | React.ReactNode) {
    this.open('warning', options, 3000)
  }

  @autobind
  error(options: Omit<MessageProps, 'type'> | React.ReactNode) {
    this.open('error', options, 4000)
  }

  //延时删除
  @autobind
  delayRemoval(id: string, lifeTime: number) {
    if (this.removalMap.get(id)) {
      // 如果已经存在就先删除
      clearTimeout(this.removalMap.get(id))
    }
    // 设置 setTimeout
    const clearID = setTimeout(() => {
      this.toaserMap.delete(id)
      this.dispatchSubscribers()
    }, lifeTime)
    // 更新 clearID
    this.removalMap.set(id, clearID)
  }
}

const controller = new Controller()
export const { info, error, success, warning } = controller
export default controller
