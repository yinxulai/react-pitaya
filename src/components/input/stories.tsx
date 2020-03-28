import React from 'react';
import Gap from '../gap';
import Input, { Textarea } from '.';

export default {
  title: 'Input'
};

export const BaseInput = () => (
  <Gap all={3}>
    <Input size="small" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input size="normal" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input type="" size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
  </Gap>
);

export const BaseTextarea = () => (
  <Gap all={3}>
    <Textarea cols={3} size="small" placeholder="测试"  />
    <Textarea cols={3} size="normal" placeholder="测试"  />
    <Textarea cols={3} size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Textarea cols={3} size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
  </Gap>
);
