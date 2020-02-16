import { Listener } from '../listener';
import { IProps as MessageProps } from '../../components/message';
export declare class Controller extends Listener {
    messageMap: Map<string, MessageProps>;
    get messageList(): MessageProps[];
    open(message: MessageProps, lifeTime?: number): void;
    info(context: React.ReactNode): void;
    success(context: React.ReactNode): void;
    warning(context: React.ReactNode): void;
    error(context: React.ReactNode): void;
    delayRemoval(id: string, lifeTime: number): void;
}
declare const controller: Controller;
declare const open: (message: MessageProps, lifeTime?: number) => void, info: (context: import("react").ReactNode) => void, error: (context: import("react").ReactNode) => void, success: (context: import("react").ReactNode) => void, warning: (context: import("react").ReactNode) => void;
export { open, info, error, success, warning };
export default controller;
//# sourceMappingURL=controller.d.ts.map