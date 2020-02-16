import autobind from '../autobind'
import hash from '../../utils/hash'
import { Listener } from '../listener'
export interface OverlayObject {
  isFixed?: boolean // 是否浮动
  isShowMask?: boolean // 是否显示遮罩
  enableCloseByMask?: boolean // 允许电机遮罩关闭
  render: (remover: Function) => React.ReactNode
}

export type OverlayID = string
export type OverlayRemover = () => any
export type Overlay = OverlayObject | React.ReactNode

export type OverlayMap = Map<OverlayID, Overlay>

export function isOverlayObject(overlay: Overlay): overlay is OverlayObject {
  const { render } = (<OverlayObject>overlay)
  // 检查 render 类型
  if (render && render instanceof Function) {
    return true
  }

  return false
}

// overlayMap 控制器
export class Controller extends Listener {

  overlayMap: OverlayMap = new Map()
  get overlayList() { return [...this.overlayMap.values()] }

  @autobind
  insert(overlay: Overlay): OverlayRemover {
    const uniqueID = hash(overlay)
    this.overlayMap.set(uniqueID, overlay)
    this.dispatchSubscribers()
    // 返回 
    return () => void this.remove(uniqueID)
  }

  @autobind
  remove(id: OverlayID) {
    if (this.overlayMap.delete(id)) {
      this.dispatchSubscribers()
    }
  }
}

const controller = new Controller()
export const { insert, remove } = controller
export default controller
