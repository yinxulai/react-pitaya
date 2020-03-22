import React from 'react'
import styles from './style.less'
import Container, { Style, IClassNameArray } from '../container'

export type ValidateResult = string | true
export type Size = 'large' | 'small' | 'normal'
export type ChangeHanler<T> = (value: T) => void
export type Validator = (value: string) => ValidateResult | Promise<ValidateResult>
type HTMLInputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'prefix' | 'size'>
type HTMLTextareaAttributes = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style' | 'prefix' | 'size'>

export type InputTip = { type?: 'warning' | 'error' | 'correct' | 'normal', message?: string | React.ReactElement }

export interface IBaseProps {
  size?: Size
  tip?: InputTip,
  width?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  style?: Style
  className?: IClassNameArray
}

export type InputProps = IBaseProps & HTMLInputAttributes
export type TextareaProps = IBaseProps & HTMLTextareaAttributes

const Tip: React.FC<InputTip> = props => {
  const { type = 'normal', message } = props
  if (!type || !message) { return <></> }

  return (
    <Container className={[styles.tip]}>
      <Container className={[styles.tipIcon, styles[type]]} >
        <svg viewBox="0 0 1024 1024" version="1.1" width="24" height="24">
          <path d="M512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m42.666667-170.666667v85.333334h-85.333334v-85.333334h85.333334z m0-256v213.333334h-85.333334V341.333333h85.333334z" fill="currentColor"></path>
        </svg>
      </Container>
      <Container className={[styles.tipMessage]}>{message}</Container>
    </Container>
  )
}

export const Input: React.FC<InputProps> = props => {
  const { size = 'default', tip,
    width = 200, prefix, suffix,
    style, className, ...attributes } = props

  const widthStyle = { width: `${width}px` }

  return (
    <Container className={[styles.input, styles[size], className]} style={[widthStyle, style]}>
      {prefix && prefix}
      <input className={styles.realInput} {...attributes} />
      {tip && <Tip {...tip} />}
      {suffix && suffix}
    </Container>
  )
}

export const Textarea: React.FC<TextareaProps> = props => {
  const { size = 'default', tip,
    width = 200, prefix, suffix,
    style, className, ...attributes } = props

  const widthStyle = { width: `${width}px` }

  return (
    <Container className={[styles.input, styles[size], className]} style={[widthStyle, style]}>
      {prefix && prefix}
      <textarea className={styles.realInput} {...attributes} />
      {tip && <Tip {...tip} />}
      {suffix && suffix}
    </Container>
  )
}

export default Input
