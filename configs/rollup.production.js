import node_resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/Main.bs.js',
  output: {
    file: './release/main.js',
    name: 'starter',
    format: 'iife'
  },
  plugins: [node_resolve({ module: true, browser: true })],
  watch: {
    clearScreen: false
  }
};
