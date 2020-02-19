import React from 'react';
import { Overlay } from './index';
import { Controller } from './controller';
import Button from '../../components/button';
import Gap from '../../components/gap';

export default {
  title: 'Overlay'
};

export const Type = () => {
  const controller = new Controller()

  return (
    <Gap>
      <Overlay controller={controller} />
      <Button type="normal" size="small" onClick={
        () => controller.insert({
          isShowMask: true,
          enableCloseByMask: true,
          render: () => '示例'
        })}>
        插入示例
      </Button>
    </Gap>
  )
};
