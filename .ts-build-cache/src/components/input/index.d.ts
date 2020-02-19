import React from 'react';
import { Style, IClassNameArray } from '../container';
export declare type ValidateResult = string | true;
export declare type Size = 'large' | 'small' | 'normal';
export declare type ChangeHanler<T> = (value: T) => void;
export declare type Validator = (value: string) => ValidateResult | Promise<ValidateResult>;
declare type HTMLInputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'prefix' | 'size'>;
export declare type InputTip = {
    type?: 'warning' | 'error' | 'correct' | 'normal';
    message?: string | React.ReactElement;
};
export interface IProps extends HTMLInputAttributes {
    size?: Size;
    tip?: InputTip;
    width?: number;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    style?: Style;
    className?: IClassNameArray;
}
export declare const Input: React.FC<IProps>;
export default Input;
export declare const a: JSX.Element;
//# sourceMappingURL=index.d.ts.map