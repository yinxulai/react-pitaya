import autobind from "autobind-decorator"

export type Subscriber = () => any

export class Listener {
  subscribers = new Map<Symbol, Subscriber>()

  @autobind
  addListener(subscriber: Subscriber) {
    const symbol = Symbol()
    this.subscribers.set(symbol, subscriber)
    return () => this.removeListener(symbol)
  }

  @autobind
  removeListener(symbol: Symbol) {
    return this.subscribers.delete(symbol)
  }

  @autobind
  async dispatchSubscribers() {
    // 保证顺序执行？不知道有啥好处 反正想这样写
    const subscribers = Array.from(this.subscribers.values())
    for (let index = 0; index < subscribers.length; index++) {
      await subscribers[index]()
    }
  }
}
