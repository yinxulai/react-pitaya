import React from 'react';
import { IProps as BaseProps } from '../container';
export declare type Type = 'info' | 'error' | 'success' | 'warning';
export interface IProps extends BaseProps {
    type?: Type;
    error?: string;
    context?: React.ReactNode;
}
export declare const Message: React.FC<React.PropsWithChildren<IProps>>;
export default Message;
//# sourceMappingURL=index.d.ts.map