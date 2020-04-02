import { debounce as ldebounce } from 'lodash'

export function debounce(time: number = 100) {
  return function (_target: Object, _propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const rawValue = descriptor.value
    descriptor.value = ldebounce(rawValue)
  }
}
