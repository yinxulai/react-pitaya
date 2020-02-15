import React from 'react';
import { Controller } from './controller';
import { IProps as MessageProps } from '../../components/message';
export interface IProps {
    controller?: Controller;
}
export interface IState {
    messages: MessageProps[];
}
export declare class Container extends React.Component<IProps, IState> {
    cancelListener: () => any;
    constructor(props: IProps);
    componentWillUnmount(): void;
    get controller(): Controller;
    get messages(): MessageProps[];
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