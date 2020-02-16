import React from 'react';
import Gap from '../gap';
import Message from '.';

export default {
  title: 'Message'
};

export const Type = () => (
  <Gap all={3}>
    <Message type="info" context="2312" />
    <Message type="error" context="2312" />
    <Message type="success" context="2312" />
    <Message type="warning" context="2312" />
  </Gap>
);
