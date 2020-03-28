import React from 'react';
import StepPlayer from '.';

export default {
  title: 'StepPlayer'
};

const stepRender = (v: any) => <>{v}</>
const stepData = Array(100).fill(1).map((_, i) => i)
const baseStyle = { width: '200px', height: '200px' }

export const Base = () => (
  <div style={baseStyle}>
    <StepPlayer
      steps={stepData}
      stepRender={stepRender}
    />
  </div>
);

export const Autoplay = () => (
  <div style={baseStyle}>
    <StepPlayer
      autoplay={true}
      steps={stepData}
      stepRender={stepRender}
    />
  </div>
);

export const Autoloop = () => (
  <div style={baseStyle}>
    <StepPlayer
      autoloop={true}
      autoplay={true}
      steps={stepData}
      stepRender={stepRender}
    />
  </div>
);

export const PlaySpeed = () => (
  <div style={baseStyle}>
    <StepPlayer
      autoloop={true}
      autoplay={true}
      steps={stepData}
      playSpeed={100}
      stepRender={stepRender}
    />
  </div>
);
