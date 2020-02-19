import { Listener } from '../listener';
import { IProps as MessageProps } from '../../components/message';
export interface ToaserMessageOptions extends MessageProps {
    delayRemoval: () => void;
}
export declare class Controller extends Listener {
    removalMap: Map<string, number>;
    toaserMap: Map<string, ToaserMessageOptions>;
    get toaserList(): ToaserMessageOptions[];
    open(type: any, options: MessageProps | React.ReactNode, lifeTime?: number): void;
    info(options: Omit<MessageProps, 'type'> | React.ReactNode): void;
    success(options: Omit<MessageProps, 'type'> | React.ReactNode): void;
    warning(options: Omit<MessageProps, 'type'> | React.ReactNode): void;
    error(options: Omit<MessageProps, 'type'> | React.ReactNode): void;
    delayRemoval(id: string, lifeTime: number): void;
}
declare const controller: Controller;
declare const info: (options: string | number | boolean | {} | import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | import("react").ReactNodeArray | import("react").ReactPortal | Pick<any, string | number | symbol> | null | undefined) => void, error: (options: string | number | boolean | {} | import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | import("react").ReactNodeArray | import("react").ReactPortal | Pick<any, string | number | symbol> | null | undefined) => void, success: (options: string | number | boolean | {} | import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | import("react").ReactNodeArray | import("react").ReactPortal | Pick<any, string | number | symbol> | null | undefined) => void, warning: (options: string | number | boolean | {} | import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)> | import("react").ReactNodeArray | import("react").ReactPortal | Pick<any, string | number | symbol> | null | undefined) => void;
export { info, error, success, warning };
export default controller;
//# sourceMappingURL=controller.d.ts.map