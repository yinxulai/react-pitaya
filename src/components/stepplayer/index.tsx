import React, { useEffect } from 'react'
import Container, { IProps as BaseProps } from '../container'
import styles from './style.less'

// TODO: 提供控制器

interface ProgressBarProps {
  value: number, // 小数 0-1
  onChange: (value: number) => void
}

function getClientRect<T extends HTMLElement>(ref: React.RefObject<T>) {

  if (!ref.current || !ref.current.getClientRects) {
    return
  }

  const clientRects = ref.current.getClientRects()

  if (!clientRects || !clientRects.length) {
    return
  }

  const clientRect = clientRects.item(0)

  if (!clientRect) {
    return
  }
  return clientRect
}

const ProgressBar: React.FC<ProgressBarProps> = props => {
  const controlPointRadius = 5
  const { value, onChange } = props
  const elRef = React.useRef<HTMLSpanElement>(null)

  const handleMouseMove: React.EventHandler<React.MouseEvent<HTMLDivElement>> = (e) => {
    if (!e || e.buttons !== 1) {
      return
    }

    const progressLineClientRect = getClientRect(elRef)
    if (!progressLineClientRect) {
      return
    }

    const rateValue = ((e.clientX - progressLineClientRect.x) / progressLineClientRect.width)

    if (rateValue < 0) {
      return onChange(0)
    }

    if (rateValue > 1) {
      return onChange(1)
    }

    return onChange(rateValue)
  }

  const controlPointLeftStyle = (value: number) => {
    const progressLineClientRect = getClientRect(elRef)
    const styleObj = { left: 0 - controlPointRadius + 'px' }
    if (!progressLineClientRect) {
      return styleObj
    }

    return { left: progressLineClientRect.width * value - controlPointRadius + 'px' }
  }

  return (
    <Container
      onMouseMove={handleMouseMove}
      className={[styles.progressBar]}
    >
      <span
        ref={elRef}
        className={styles.progressLine}
      >
        <span
          className={styles.controlPoint}
          style={controlPointLeftStyle(value)}
        />
      </span>
    </Container>
  )
}

export interface IProps<T> extends BaseProps {
  steps: T[]
  stepRender: (step: T) => React.ReactElement

  autoloop?: boolean // 自动循环
  autoplay?: boolean // 自动播放
  playSpeed?: number // 播放速度 不支持改变
}

type PlayState = 'playing' | 'suspend'

export function StepPlayer<T>(props: IProps<T>) {
  const { steps, stepRender } = props
  const [stepIndex, setStepIndex] = React.useState<number>(0)
  const { autoloop = false, autoplay = false, playSpeed = 500 } = props
  const [playState, setPlayState] = React.useState<PlayState>(autoplay ? 'playing' : 'suspend')

  const progressBarValue = stepIndex / steps.length

  const handleProgressBarChange = (value: number) => {
    setStepIndex(Math.floor(value * steps.length))
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (playState === 'playing') {
        if (stepIndex < steps.length) {
          setStepIndex(stepIndex + 1)
        } else {
          if (autoloop) { // 播放到头了
            setStepIndex(0) // 重置到开始
          } else {
            setStepIndex(0) // 重置
            setPlayState('suspend') // 停止
          }
        }
      }
    }, playSpeed)

    return () => clearInterval(timer)
  })

  return (
    <Container className={[styles.stepPlayer, props.className]} style={[props.style]}>
      <div className={styles.screen}>{stepRender(steps[stepIndex])}</div>
      <ProgressBar value={progressBarValue} onChange={handleProgressBarChange} />
    </Container>
  )
}

export default StepPlayer
