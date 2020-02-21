import React from 'react';
import { Controller, ToaserMessageOptions } from './controller';
export interface IProps {
    controller?: Controller;
}
export interface IState {
    toasers: ToaserMessageOptions[];
}
export default class Container extends React.Component<IProps, IState> {
    cancelListener: Function;
    componentDidMount(): void;
    componentWillUnmount(): void;
    continuedLife(): void;
    get controller(): Controller;
    get toasers(): ToaserMessageOptions[];
    get animationClassNames(): {
        appear: string;
        appearActive: string;
        appearDone: string;
        enter: string;
        enterActive: string;
        enterDone: string;
        exit: string;
        exitActive: string;
        exitDone: string;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=container.d.ts.map