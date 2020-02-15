import React from 'react'
import styles from './style.less'
import Container, { Style, IClassNameArray } from '../container'

export type Name =
  | 'tip'

interface IProps {
  name: Name
  size?: string
  style?: Style
  color?: string
  className?: IClassNameArray
}

export const Icon: React.FC<IProps> = props => {
  const { name, size = '1rem', style, color = 'black', className } = props

  return (
    <Container className={[styles.icon, className]} style={style}>
      <i style={{ color, fontSize: size }} className={`icon-${name}`}></i>
    </Container>
  )
}

export default Icon
