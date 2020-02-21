import React from 'react';
import { Style, IClassNameArray } from '../container';
export declare type Type = 'link' | 'normal';
export declare type Size = 'large' | 'small' | 'normal';
export declare type Status = 'normal' | 'loading' | 'disable';
declare type HtmlType = React.ButtonHTMLAttributes<any>['type'];
declare type HTMLButtonAttributes = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style' | 'type'>;
export interface IProps extends HTMLButtonAttributes {
    size?: Size;
    type?: Type;
    block?: boolean;
    disable?: boolean;
    altitude?: number;
    htmlType?: HtmlType;
    onClick?: () => any | Promise<any>;
    style?: Style;
    className?: IClassNameArray;
}
export declare const Button: React.FC<React.PropsWithChildren<IProps>>;
export default Button;
//# sourceMappingURL=index.d.ts.map