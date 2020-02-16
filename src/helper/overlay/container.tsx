import React from 'react'
import style from './style.less'
import autobind from '../autobind'
import BaseContainer from '../../components/container'
import defaultController, { Controller, OverlayID, isOverlayObject, OverlayMap } from './controller'

export interface IProps {
  controller?: Controller
}
export interface IState {
  overlays: OverlayMap
}

export default class Container extends React.Component<IProps, IState> {

  // 取消订阅
  cancelListener!: Function

  componentDidMount() {
    this.setState({ overlays: this.controller.overlayMap })
    this.cancelListener = this.controller.addListener(() => {
      this.setState({ ...this.state, overlays: this.controller.overlayMap })
    })
  }

  componentWillUnmount() {
    this.cancelListener && this.cancelListener()
  }

  @autobind
  generateCloser(key: OverlayID) {
    return (_: any) => this.controller.remove(key)
  }

  get controller() {
    return this.props.controller || defaultController
  }

  get overlayEntities() {
    const { overlays } = this.state || {}
    if (!overlays || overlays.size <= 0) {
      return []
    }

    return [...overlays.entries()].map(([id, overlay]) => {

      if (!isOverlayObject(overlay)) {
        return null // 非有效的 Overlay
      }

      const sortID = Date.now()
      const isShowMask = overlay.isShowMask // 是否显示遮罩
      const enableCloseByMask = overlay.enableCloseByMask // 是否允许点击遮罩关闭
      const maskCloser = enableCloseByMask ? this.generateCloser(id) : undefined

      return (
        <BaseContainer className={[style.entitiesRoot]} style={{ zIndex: sortID }} key={id}>
          {isShowMask && <BaseContainer className={[style.mask]} onClick={maskCloser} />}
          {overlay.render(this.generateCloser(id))}
        </BaseContainer>
      )
    }).filter(Boolean)
  }

  render() {
    const sortID = Date.now()
    return (
      <BaseContainer className={[style.overlay]} style={{ zIndex: sortID }}>
        {this.overlayEntities}
      </BaseContainer>
    )
  }
}

