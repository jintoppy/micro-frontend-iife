export default class {
  constructor({ dir, file, name, plugins, external }) {
    this.external = ['react', 'react-dom', 'classnames', 'prop-types', ...external];
    this.input = 'src/index.js';
    this.output = {
        dir,
        file,
        format: 'umd',
        name
      };
    this.plugins = plugins;
    this.globals = {
      'react': 'React',
      'react-dom': 'ReactDOM',
      '@sdp/shared-ui': 'sharedUi'
    };
  }
}
