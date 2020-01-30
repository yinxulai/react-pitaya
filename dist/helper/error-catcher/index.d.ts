export declare type ErrorKey = string | number | symbol;
export declare type ErrorRender = (...args: any[]) => string;
export declare type ErrorMap = Map<ErrorKey, string | ErrorRender>;
declare class ErrorCatcher {
    globalErrorMap: ErrorMap;
    addError(error: ErrorMap): void;
    successHandler(res: any, errorMap: ErrorMap): void;
    failureHandler(err: any, errorMap: ErrorMap): void;
    catch(errorMap?: ErrorMap): (target: any, propertyKey: string | number | symbol, descriptor: PropertyDescriptor) => void;
}
export declare const errorCatcher: ErrorCatcher;
declare const _default: (errorMap?: ErrorMap | undefined) => (target: any, propertyKey: string | number | symbol, descriptor: PropertyDescriptor) => void;
export default _default;
//# sourceMappingURL=index.d.ts.map