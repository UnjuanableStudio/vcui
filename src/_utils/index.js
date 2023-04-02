const COMPONENT_PREFIX = 'Vc';

export const getComponentPrefix = (options) => {
    return options?.componentPrefix ?? COMPONENT_PREFIX;
};
