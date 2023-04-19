import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
    ElementType,
    Key,
    Props,
    ReactElementType,
    Ref
} from 'shared/ReactTypes';

/**
 * 生成ReactElement的函数
 */
const ReactElement = (type: ElementType, key: Key, ref: Ref, props: Props) => {
    const element: ReactElementType = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
        __mark: '123'
    };
    return element;
};

/**
 * jsx函数
 */
export const jsx = (
    type: ElementType,
    config: any,
    ...maybeChildren: any[]
) => {
    let key: Key | null = null;
    let ref: Ref | null = null;
    const props: Props = {};

    // 遍历config，将里面的值赋值给props
    for (const prop in config) {
        const value = config[prop];

        // 处理键为key，不是undefined，就转成为字符串并赋值给变量key
        if (prop === 'key') {
            if (value !== undefined) {
                key = '' + value;
            }
            continue;
        }

        // 处理键为ref，不是undefined，就赋值给变量ref
        if (prop === 'ref') {
            if (value !== undefined) {
                ref = value;
            }
            continue;
        }

        // 对于其他的，如果这是config自己身上的prop，就直接赋值给props
        if ({}.hasOwnProperty.call(config, prop)) {
            props[prop] = value;
        }
    }

    // 处理maybeChildren
    const childrenLength = maybeChildren.length;
    if (childrenLength) {
        // 如果maybeChildren是单节点  child这样
        if (childrenLength === 1) {
            props.children = maybeChildren[0];
        }
        // 如果是多节点 [child, child]这样
        else {
            props.children = maybeChildren;
        }
    }

    return ReactElement(type, key, ref, props);
};

/**
 * 开发环境的jsx函数
 */
export const jsxDev = jsx;
