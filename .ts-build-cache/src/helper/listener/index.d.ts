export declare type Subscriber = () => any;
export declare class Listener {
    subscribers: Map<Symbol, Subscriber>;
    addListener(subscriber: Subscriber): () => boolean;
    removeListener(symbol: Symbol): boolean;
    dispatchSubscribers(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map