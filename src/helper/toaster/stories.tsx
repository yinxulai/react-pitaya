import React from 'react';
import Container from './container';
import Gap from '../../components/gap';
import { Controller } from './controller';
import Button from '../../components/button';

export default {
  title: 'Toaser'
};

export const Test = () => {
  const controller = new Controller()

  return (
    <Gap>
      <Button type="normal" size="small" onClick={() => controller.info('info')}>
        info
        </Button>
      <Button type="normal" size="small" onClick={() => controller.warning('warning')}>
        warning
        </Button>
      <Button type="normal" size="small" onClick={() => controller.success('success')}>
        success
        </Button>
      <Button type="normal" size="small" onClick={() => controller.error('error')}>
        error
        </Button>
      <Button type="normal" size="small" onClick={() => controller.error({ statusCode: 200, error: 'error_info', })}>
        statusCode-error
      </Button>
      <Button type="normal" size="small" onClick={() => controller.error({ statusCode: 200, error: 'error_info', })}>
        statusCode-error
      </Button>
      <Container controller={controller} />
    </Gap >
  )
};

