import React, { useEffect } from 'react'
import Container, { IProps as BaseProps } from '../container'
import styles from './style.less'

// TODO: 提供控制器

interface ProgressBarProps {
  value: number, // 小数 0-1
  onChange: (value: number) => void
}

type PlayState = 'playing' | 'suspend'

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

interface PlayStateSwitchButtonProps {
  value: PlayState
  onChange: (value: PlayState) => void
}

const PlayStateSwitchButton: React.FC<PlayStateSwitchButtonProps> = (props) => {
  const { value, onChange } = props

  const suspend = (
    <svg viewBox="0 0 62 82" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-19.000000, -9.000000)" fill="#FFFFFF">
          <g id="suspend" transform="translate(19.000000, 9.000000)">
            <rect id="rect-l" x="5.68434189e-14" y="0" width="19" height="82" rx="9.5"></rect>
            <rect id="rect-r" x="43" y="0" width="19" height="82" rx="9.5"></rect>
          </g>
        </g>
      </g>
    </svg>
  )

  const playing = (
    <svg viewBox="0 0 62 84" version="1.1" >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-19.000000, -8.000000)" fill="#FFFFFF">
          <g id="playing" transform="translate(19.000000, 8.000000)">
            <path d="M57.9741594,49.9717764 L16.5374483,81.3539914 C12.1347578,84.688382 5.86261425,83.8223538 2.52822364,79.4196633 C1.21221217,77.6820171 0.5,75.5619628 0.5,73.382215 L0.5,10.617785 C0.5,5.09493748 4.9771525,0.61778498 10.5,0.61778498 C12.6797478,0.61778498 14.7998021,1.32999715 16.5374483,2.64600862 L57.9741594,34.0282236 C62.3768499,37.3626142 63.2428781,43.6347578 59.9084875,48.0374483 C59.3553629,48.7677874 58.7044985,49.4186518 57.9741594,49.9717764 Z" id="triangle"></path>
          </g>
        </g>
      </g>
    </svg>
  )

  return (
    <div
      className={styles.playStateSwitchButton}
      onClick={() => onChange(value === 'playing' ? 'suspend' : 'playing')}
    >
      {value === 'playing' && suspend}
      {value === 'suspend' && playing}
    </div>
  )
}

export interface IProps<T> extends BaseProps {
  steps: T[]
  stepRender: (step: T) => React.ReactElement

  autoloop?: boolean // 自动循环
  autoplay?: boolean // 自动播放
  playSpeed?: number // 播放速度 不支持改变
}

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
      <div className={styles.footer}>
        < PlayStateSwitchButton value={playState} onChange={setPlayState} />
        <ProgressBar value={progressBarValue} onChange={handleProgressBarChange} />
      </div>

    </Container>
  )
}

export default StepPlayer
