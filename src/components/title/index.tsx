import React from 'react'
import style from './style.less'
import { HTMLAttributes } from 'react'
import Container, { Style, IClassNameArray } from '../container'

export type Level = 1 | 2 | 3 | 4 | 5 | 6
type HTMLDIVAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>

export interface IProps extends HTMLDIVAttributes {
  level?: Level
  title?: string
  subtitle?: string

  style?: Style
  className?: IClassNameArray
}

export const Title: React.FC<IProps> = props => {
  const { level = 1, title, subtitle } = props
  return (
    <Container className={[style.title, style[`level-${level}`], props.className]} style={props.style}>
      <div>{title}</div>
      <div className={style.subtitle}>{subtitle}</div>
    </Container>
  )
}

export default Title
