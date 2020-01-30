import React from 'react';
import { Controller, OverlayID, OverlayMap } from './controller';
export interface IProps {
    controller?: Controller;
}
export interface IState {
    overlays: OverlayMap;
}
export default class Container extends React.Component<IProps, IState> {
    constructor(props: IProps);
    cancelListener: () => any;
    generateCloser(key: OverlayID): (_: any) => void;
    componentWillUnmount(): void;
    get controller(): Controller;
    get overlayEntities(): (JSX.Element | null)[] | undefined;
    render(): ({} | null | undefined)[];
}
//# sourceMappingURL=container.d.ts.map