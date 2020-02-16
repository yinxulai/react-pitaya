import React from 'react';
import { IProps as BaseProps } from '../container';
export declare type Type = 'info' | 'error' | 'success' | 'warning';
export declare function isMessageProps(data: any): data is IProps;
export interface IProps extends BaseProps {
    type: Type;
    context: React.ReactNode;
    statusCode?: string;
    error?: string;
    stack?: string;
}
export declare const Message: React.FC<React.PropsWithChildren<IProps>>;
export default Message;
//# sourceMappingURL=index.d.ts.map