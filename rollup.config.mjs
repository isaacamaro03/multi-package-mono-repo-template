import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/cjs/index.js',
      format: 'cjs'
    },
    {
      file: './dist/esm/index.js',
      format: 'es'
    }
  ],
  plugins: [
    external(),
    resolve({
      browser: true
    }),
    commonjs(),
    typescript({
      exclude: ['**/__tests__', '**/*.test.ts', '**/*.test.tsx']
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions,
      configFile: '../../.babelrc'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser()
  ]
};
