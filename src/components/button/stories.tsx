import React from 'react';
import Gap from '../gap';
import Button from '.';

export default {
  title: 'Button'
};

export const Type = () => (
  <Gap all={3}>
    <Button type="normal">
      Normal Button
  </Button>
    <Button type="link">
      Link Button
  </Button>
  </Gap>
);

export const Size = () => (
  <Gap all={3}>
    <Button type="normal" size="small">
      Small Button
    </Button>
    <Button type="normal" size="normal">
      Normal Button
    </Button>
    <Button type="normal" size="large">
      Large Button
    </Button>
    <Button type="link" size="small">
      Small Button
    </Button>
    <Button type="link" size="normal">
      Normal Button
    </Button>
    <Button type="link" size="large">
      Large Button
    </Button>
  </Gap>
)

export const Loading = () => {
  const resolve = () => new Promise((resolve, reject) => setTimeout(resolve, 1000))
  return (
    <Gap all={3}>
      <Button type="normal" onClick={resolve}>
        Normal Button
</Button>
      <Button type="link" onClick={resolve}>
        Link Button
</Button>
    </Gap>
  )
}