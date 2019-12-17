import plugins from './.rollup/plugins';
import pkg from './package.json';
import RollupConfig from '../RollupConfigClass';

export default [
  {
    external: ['react', 'react-dom', 'classnames', 'prop-types', ...Object.keys(pkg.dependencies)],
    plugins,
    output: {
      dir: 'dist',
      format: 'iife',
      name: 'sharedUi'
    },
    input: 'src/index.js',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    }
  }
];
