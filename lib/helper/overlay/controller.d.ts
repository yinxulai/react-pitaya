import { Listener } from '../listener';
export interface OverlayObject {
    isFixed?: boolean;
    isShowMask?: boolean;
    enableCloseByMask?: boolean;
    render: (remover: Function) => React.ReactNode;
}
export declare type OverlayID = string;
export declare type OverlayRemover = () => any;
export declare type Overlay = OverlayObject | React.ReactNode;
export declare type OverlayMap = Map<OverlayID, Overlay>;
export declare function isOverlayObject(overlay: Overlay): overlay is OverlayObject;
export declare class Controller extends Listener {
    overlayMap: OverlayMap;
    get overlayList(): Overlay[];
    insert(overlay: Overlay): OverlayRemover;
    remove(id: OverlayID): void;
}
declare const controller: Controller;
export declare const insert: (overlay: Overlay) => OverlayRemover, remove: (id: string) => void;
export default controller;
//# sourceMappingURL=controller.d.ts.map