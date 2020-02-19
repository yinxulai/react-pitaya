export default function (start = 4, end = 20): string {
  const error = new Error()
  const stack = error.stack || ''
  const stackList = stack.split('\n')

  stackList.slice(start, end)
  // stackList.unshift(`Name: ${error.name}`)
  // stackList.unshift(`Message: ${error.message}`)

  return stackList.join('\n')
}