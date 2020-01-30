import React from 'react';
import { CSSProperties, HTMLAttributes } from "react";
export interface IStyleArray extends Array<Style> {
}
export declare type Style = CSSProperties | undefined | IStyleArray;
export declare type ClassName = string | undefined | IClassNameArray;
export interface IClassNameArray extends Array<ClassName> {
}
declare type HTMLDIVAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>;
export interface IProps extends HTMLDIVAttributes {
    style?: Style;
    className?: IClassNameArray;
}
export declare const Container: React.FC<React.PropsWithChildren<IProps>>;
export default Container;
//# sourceMappingURL=index.d.ts.map