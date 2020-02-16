import React from 'react';
import Gap from '../gap';
import Input from '.';

export default {
  title: 'Input'
};

export const Type = () => (
  <Gap all={3}>
    <Input size="small" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input size="normal" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
    <Input size="large" placeholder="测试" tip={{ type: 'warning', message: '请检查输入' }} />
  </Gap>
);
