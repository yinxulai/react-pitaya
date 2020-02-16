import React from 'react'
import Title from '../title'
import Container, { IProps as BaseProps } from '../container'
import style from './style.less'


export type Type = 'info' | 'error' | 'success' | 'warning'

export interface IProps extends BaseProps {
  type?: Type
  error?: string
  context?: React.ReactNode
}

export const Message: React.FC<React.PropsWithChildren<IProps>> = props => {
  const { type = 'info', context } = props

  return (
    <Container className={[style.message, props.className, style[type]]} style={[props.style]}>
      <Title className={[style[type]]} level={5} title={type} />
      <Container className={[style.context]} >{context}</Container>
    </Container>
  )
}

export default Message
