import React from 'react'
import style from './style.less'
import autobind from 'autobind-decorator'
import RootContainer from '../../components/container'
import defaultController, { remove, Controller, OverlayID, OverlayMap, isOverlayRender } from './controller'

export interface IProps {
  controller?: Controller
}
export interface IState {
  overlays: OverlayMap
}

export default class Container extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    // 订阅
    this.cancelListener = this.controller.addListener(() => {
      this.setState({ overlays: this.controller.overlays })
    })
  }

  // 取消订阅
  cancelListener: () => any

  @autobind
  generateCloser(key: OverlayID) {
    return (_: any) => remove(key)
  }

  componentWillUnmount() {
    this.cancelListener && this.cancelListener()
  }

  get controller() {
    return this.props.controller || defaultController
  }

  get overlayEntities() {
    const { overlays } = this.state || {}
    if (overlays && overlays.size > 0) {
      const entries = Array.from(overlays.entries())

      return entries.map(([id, overlay]) => {

        if (!isOverlayRender(overlay)) {
          return null // 非有效的 Overlay
        }

        const isShowMask = overlay.isShowMask // 是否显示遮罩
        const enableCloseByMask = overlay.enableCloseByMask // 是否允许点击遮罩关闭
        const maskCloser = enableCloseByMask ? this.generateCloser(id) : undefined

        return (
          <RootContainer className={[style.entitiesRoot]} style={{ zIndex: id }} key={String(id)}>
            {isShowMask && <RootContainer className={[style.mask]} onClick={maskCloser} />}
            {overlay.render(this.generateCloser(id))}
          </RootContainer>
        )
      })
    }
  }

  render() {
    return [
      this.props.children,
      <RootContainer className={[style.overlay]}>
        {this.overlayEntities}
      </RootContainer>
    ]
  }
}

