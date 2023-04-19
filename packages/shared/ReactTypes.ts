/**
 * 元素类型
 */
export type ElementType = any;
/**
 * key的类型
 */
export type Key = any;
/**
 * props的类型
 */
export type Props = {
    children?: any;
    id?: any;
    [propName: string]: any;
};
/**
 * ref的类型
 */
export type Ref = any;

/**
 * react元素
 */
export interface ReactElementType {
    /**
     * ReactElement中的标记，使用symbol防止被滥用
     */
    $$typeof: symbol | number;
    /**
     * key
     */
    key: Key;
    /**
     * ref
     */
    ref: Ref;
    /**
     * prop
     */
    props: Props;
    /**
     * type
     */
    type: ElementType;
    /**
     * 个人标记
     */
    __mark: string;
}
