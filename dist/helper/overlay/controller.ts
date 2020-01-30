import { Listener } from '../listener'
import autobind from 'autobind-decorator'

export interface IOverlayRender {
  isFixed?: boolean // 是否浮动
  isShowMask?: boolean // 是否显示遮罩
  enableCloseByMask?: boolean // 允许电机遮罩关闭
  render: (remover: Function) => React.ReactNode
}

export function isOverlayRender(overlay: Overlay): overlay is IOverlayRender {
  const { render } = (<IOverlayRender>overlay)
  // 检查 render 类型
  if (render && render instanceof Function) {
    return true
  }
  return false
}

export type OverlayID = number
export type Overlay = React.ReactNode | IOverlayRender
export type OverlayMap = Map<OverlayID, Overlay>

export class Controller extends Listener {
  lastID: number = 0
  overlays: OverlayMap = new Map()

  @autobind
  insert(overlay: Overlay) {
    const id = ++this.lastID
    this.overlays.set(id, overlay)
    this.dispatchSubscribers()
    return () => this.remove(id)
  }

  @autobind
  remove(id: OverlayID) {
    if (this.overlays.delete(id)) {
      this.dispatchSubscribers()
    }
  }
}

const controller = new Controller()
export const { insert, remove } = controller
export default controller
