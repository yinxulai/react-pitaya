import React from 'react';
import { HTMLAttributes } from 'react';
import { Style, IClassNameArray } from '../container';
export declare type Level = 1 | 2 | 3 | 4 | 5 | 6;
declare type HTMLDIVAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'>;
export interface IProps extends HTMLDIVAttributes {
    level?: Level;
    title?: string;
    subtitle?: string;
    style?: Style;
    className?: IClassNameArray;
}
export declare const Title: React.FC<IProps>;
export default Title;
//# sourceMappingURL=index.d.ts.map