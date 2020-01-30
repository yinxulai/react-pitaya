import React from 'react'
import style from './style.less'
import Container, { Style, IClassNameArray } from '../container'

export type Type = 'link' | 'normal'
export type Size = 'large' | 'small' | 'normal'
export type Status = 'normal' | 'loading' | 'disable'
type HtmlType = React.ButtonHTMLAttributes<any>['type']
type HTMLButtonAttributes = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style' | 'type'>

export interface IProps extends HTMLButtonAttributes {
  size?: Size
  type?: Type,
  block?: boolean
  disable?: boolean
  altitude?: number,
  htmlType?: HtmlType
  onClick?: () => any | Promise<any>

  style?: Style
  className?: IClassNameArray
}

export const Button: React.FC<React.PropsWithChildren<IProps>> = props => {
  const [status, setStatus] = React.useState<Status>('normal')
  const { size = 'normal', type = 'normal', disable } = props
  const children = status === 'loading' ? '处理中...' : props.children

  const handleClick = () => {
    // loading disable 都无法点击
    if (status !== 'normal') {
      return
    }

    if (!props.onClick) {
      return
    }

    const result = props.onClick()

    if (result instanceof Promise) {
      setStatus('loading')
      result.finally(() => setStatus('normal'))
      return result
    }
  }

  return (
    <Container style={[props.style]} className={[style.button, style[type], style[size], style[status], props.className]}>
      <button type={props.htmlType} disabled={disable} className={[style.realButton, style[type]].join(' ')} onClick={handleClick}>{children}</button>
    </Container>
  )
}

export default Button
