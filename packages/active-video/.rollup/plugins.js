import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default [
    resolve({
        extensions: ['.scss']
    }),
    scss({
        output: false
    }),
    babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react'],
        include: 'src/**',
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
            ['transform-react-remove-prop-types', { removeImport: true }]        
        ]
    }),
    commonjs({
        namedExports: {
            'react-dom': ['render']
        }
    }),
    json()
];
