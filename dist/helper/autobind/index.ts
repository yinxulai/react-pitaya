export default function autobind(target: any, _: PropertyKey, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;

    if (typeof fn !== 'function') {
        throw new TypeError(`@autobind decorator can only be applied to methods not: ${typeof fn}`);
    }

    descriptor.value = fn.bind(target)
}
