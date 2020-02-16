import React from 'react';
import { Controller, OverlayID, OverlayMap } from './controller';
export interface IProps {
    controller?: Controller;
}
export interface IState {
    overlays: OverlayMap;
}
export default class Container extends React.Component<IProps, IState> {
    cancelListener: Function;
    componentDidMount(): void;
    componentWillUnmount(): void;
    generateCloser(key: OverlayID): (_: any) => void;
    get controller(): Controller;
    get overlayEntities(): (JSX.Element | null)[];
    render(): JSX.Element;
}
//# sourceMappingURL=container.d.ts.map