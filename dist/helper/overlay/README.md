# Overlay

这里尝试使用的 flutter 的方式来实现的
container 在构造函数订阅 controlle 的 change
在 controlle 通过 insert remove 方法来修改数据并通过 Listener dispatchSubscribers 来触发 container 中的事件

写法比较复杂，在 TS 中可以用响应式数据完成
