// TODO: 待实现
import React from 'react'
import style from './style.less'
import Container, {IProps as BaseProps } from '../container'

export interface IProps extends BaseProps {
  lowest?: number // 最低运行时间
  loading?: boolean // 是否 loading
}

export const Loading: React.FC<React.PropsWithChildren<IProps>> = props => {
  return (
    <Container className={[style.loading, props.className]} style={props.style}>
      {props.loading &&
        (<div className={style.loadingMark}>
          加载中...
        </div>)
      }
      <div className={style.context}>
        {props.children}
      </div>
    </Container>
  )
}

export default Loading
