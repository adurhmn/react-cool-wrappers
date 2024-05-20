import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postCssImport from 'postcss-import';

const extensions = ['.js', '.ts', '.jsx', '.tsx', '.mjs'];

const umdGlobals = {
  react: 'React',
};

const plugins = [
  resolve({ extensions: extensions }),
  commonjs({
    esmExternals: false,
    ignoreGlobal: true,
  }),
  typescript({
    exclude: ['**/*.test.ts', '**/*.test.tsx', 'dist', 'stories'],
    tsconfig: './tsconfig.json',
    outputToFilesystem: true,
    sourceMap: true,
  }),
  external({
    includeDependencies: true,
  }),
  postcss({
    use: ['sass'],
    minimize: true,
    plugins: [postCssImport()],
  }),

  babel({
    exclude: 'node_modules/**',
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          pure: true,
          minify: true,
        },
      ],
    ],
  }),
];

export default [
  {
    input: './src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/react-cool-wrappers.esm.js',
        interop: 'auto',
        sourcemap: true,
      },
      {
        exports: 'named',
        interop: 'auto',
        format: 'cjs',
        file: 'dist/react-cool-wrappers.cjs.js',
        sourcemap: true,
      },
    ],
    external: (id) => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
    plugins,
  },
  {
    input: './src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'dist/react-cool-wrappers.browser.esm.js',
        interop: 'auto',
        sourcemap: true,
      },
      {
        exports: 'named',
        interop: 'auto',
        format: 'cjs',
        file: 'dist/react-cool-wrappers.browser.cjs.js',
        sourcemap: true,
      },
    ],
    external: (id) => !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
    plugins: [...plugins, terser()],
  },
  {
    input: './src/index.ts',
    output: {
      exports: 'named',
      interop: 'auto',
      format: 'umd',
      file: 'dist/react-cool-wrappers.umd.js',
      sourcemap: true,
      globals: umdGlobals,
      name: 'ReactCoolWrappers',
    },
    external: ['react', 'react-dom'],
    plugins: [...plugins, replace({ 'process.env.NODE_ENV': JSON.stringify('production') })],
  },
];
