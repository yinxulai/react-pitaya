import { Listener } from '../listener';
export interface IOverlayRender {
    isFixed?: boolean;
    isShowMask?: boolean;
    enableCloseByMask?: boolean;
    render: (remover: Function) => React.ReactNode;
}
export declare function isOverlayRender(overlay: Overlay): overlay is IOverlayRender;
export declare type OverlayID = number;
export declare type Overlay = React.ReactNode | IOverlayRender;
export declare type OverlayMap = Map<OverlayID, Overlay>;
export declare class Controller extends Listener {
    lastID: number;
    overlays: OverlayMap;
    insert(overlay: Overlay): () => void;
    remove(id: OverlayID): void;
}
declare const controller: Controller;
export declare const insert: (overlay: Overlay) => () => void, remove: (id: number) => void;
export default controller;
//# sourceMappingURL=controller.d.ts.map