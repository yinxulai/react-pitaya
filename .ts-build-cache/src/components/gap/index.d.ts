import React from 'react';
import { IProps as BaseProps } from '../container';
export declare type GapLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export declare type LtrbLevel = [GapLevel, GapLevel, GapLevel, GapLevel];
export interface IProps extends BaseProps {
    top?: GapLevel;
    bottom?: GapLevel;
    left?: GapLevel;
    right?: GapLevel;
    all?: GapLevel;
    ltrb?: LtrbLevel;
    vertical?: GapLevel;
    horizontal?: GapLevel;
    type?: 'padding' | 'margin';
}
export declare const Gap: React.FC<React.PropsWithChildren<IProps>>;
export default Gap;
//# sourceMappingURL=index.d.ts.map