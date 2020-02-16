import React from 'react';
import Gap from '../gap';
import Title from '.';

export default {
  title: 'Title'
};

export const Type = () => (
  <Gap all={3}>
    <Title level={1} title="标题" subtitle="副标题" />
    <Title level={2} title="标题" subtitle="副标题" />
    <Title level={3} title="标题" subtitle="副标题" />
    <Title level={4} title="标题" subtitle="副标题" />
    <Title level={5} title="标题" subtitle="副标题" />
    <Title level={6} title="标题" subtitle="副标题" />
  </Gap>
);
