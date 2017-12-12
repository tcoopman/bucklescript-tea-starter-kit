import node_resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './src/Main.bs.js',
    output: {
        file: './release/main.js',
        format: 'iife'
    },
    plugins: [
        node_resolve({module: true, browser: true}),
        livereload('release')
    ],
    name: 'starter',
    watch: {
        clearScreen: false
    }
}
