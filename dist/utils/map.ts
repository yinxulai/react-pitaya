// 浅拷贝
export function merge<K, T>(target: Map<K, T>, data?: Map<K, T>): Map<K, T> {
  // 使用深拷贝
  const newMap = shallowCopy(target)

  if (!data) {
    return newMap
  }

  data.forEach((value, key) => {
    if (!newMap.get(key)) {
      newMap.set(key, value)
    }
  })

  return newMap
}

export function shallowCopy<K, T>(target: Map<K, T>): Map<K, T> {
  const newMap = new Map<K, T>(target.entries())
  return newMap
}

// TODO: 实现
export function deepCopy<K, T>(target: Map<K, T>): Map<K, T> {
  const newMap = new Map<K, T>(target.entries())
  return newMap
}

