import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
/**
 * 包路径
 */
const pkgName = path.resolve(__dirname, '../../packages');

/**
 * 打包产物路径
 */
const distPath = path.resolve(__dirname, '../../dist/node_modules');

/**
 * 处理包路径
 */
export const resolvePkgPath = (name, isDist) => {
    // 如果是打包产物
    if (isDist) {
        return `${distPath}/${name}`;
    }
    // 如果是包
    return `${pkgName}/${name}`;
};

/**
 * 解析packages.json
 */
export const resolvePkgJson = (name) => {
    // 每个包packages.json的路径
    const path = `${resolvePkgPath(name)}/package.json`;

    return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));
};

/**
 * 解析rollup的插件
 */
export const resolveBaseRollupPlugins = ({typescript = {}} = {}) => {
    return [ts(typescript), cjs()];
};
