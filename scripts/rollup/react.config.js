import { resolvePkgPath, resolvePkgJson, resolveBaseRollupPlugins } from './utils.js';
import { defineConfig } from 'rollup';

const { name, module } = resolvePkgJson('react');

/**
 * react包的路径
 */
const pkgPath = resolvePkgPath(name);

/**
 * react产物路径
 */
const distPath = resolvePkgPath(name, true);

// 用于rollup打包react的配置
export default defineConfig([
    // react
    {
        input: `${pkgPath}/${module}`,
        output: {
            file: `${distPath}/index.js`,
            name: 'index.js',
            format: 'umd'
        },
        plugins: resolveBaseRollupPlugins()
    },
    // jsx-runtime
    {
        input: `${pkgPath}/src/jsx.ts`,
        output: [
            // jsx-runtime
            {
                file: `${distPath}/jsx-runtime.js`,
                name: 'jsx-runtime.js',
                format: 'umd'
            },
            {
                file: `${distPath}/jsx-dev-runtime.js`,
                name: 'jsx-dev-runtime.js',
                format: 'umd'
            }
        ],
        plugins: resolveBaseRollupPlugins()
    }
]);
