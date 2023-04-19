/**
 * 是否支持symbol
*/
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

/**
 * ReactElement中的$$typeof的值，使用symbol防止被滥用
*/
export const REACT_ELEMENT_TYPE = supportSymbol
    ? Symbol.for('react.element')
    : 0xeac7;
