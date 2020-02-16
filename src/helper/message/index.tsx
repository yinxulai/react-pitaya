import react from 'react'
import hash from '../../utils/hash'
import React from 'react'
import { insert } from '../overlay'
import Container from './container'

insert({ render: () => <Container /> })
export { info, error, success, warning } from './controller'
