export { default as Overlay } from './container'
export { insert, remove } from './controller'

// TODO: Overlay 存在多个的问题
// TODO: controller 查找最近的 Overlay？ 然后 insert 允许指定 root 参数使用最远的 Overlay？
