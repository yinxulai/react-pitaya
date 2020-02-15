import React from 'react';
import { Listener } from '../listener';
import { IProps as MessageProps } from '../../components/message';
export declare class Controller extends Listener {
    static isMountOnOverlay: boolean;
    static mountOnOverlay(): void;
    lastID: number;
    messageMap: Map<number, MessageProps>;
    get messages(): MessageProps[];
    open(message: MessageProps, lifeTime?: number): void;
    info(context: MessageProps['context']): void;
    success(context: MessageProps['context']): void;
    warning(context: MessageProps['context']): void;
    error(context: MessageProps['context']): void;
    delayRemoval(id: number, lifeTime: number): void;
}
declare const controller: Controller;
declare const open: (message: MessageProps, lifeTime?: number) => void, info: (context: React.ReactNode) => void, error: (context: React.ReactNode) => void, success: (context: React.ReactNode) => void, warning: (context: React.ReactNode) => void;
export { open, info, error, success, warning };
export default controller;
//# sourceMappingURL=controller.d.ts.map