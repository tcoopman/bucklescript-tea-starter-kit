import node_resolve from 'rollup-plugin-node-resolve';

export default {
    input: './lib/es6/src/main.js',
    output: {
        file: './release/main.js',
        format: 'iife'
    },
    plugins: [
        node_resolve({module: true, browser: true}),
    ],
    name: 'starter'
}