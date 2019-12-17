/* eslint-disable camelcase */

import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

function getPath() {
  const returnValue = path.resolve(__dirname, ...arguments);

  return returnValue;
}

const commonChunksName = 'runtime'

const {
  NODE_ENV,
  npm_config_dev,
  npm_config_skip_uglification,
  npm_config_output_filename,
  npm_config_analyze_bundle
} = process.env;

const webpackConfig = {
  output: {
    path: path.join(__dirname, 'dist/'),
    chunkFilename: '[name].js',
    publicPath: '/etc.clientlibs/settings/wcm/designs/fca-brands/clientlibs/',
    libraryTarget: 'umd',
    // will name the AMD module of the UMD build
    umdNamedDefine: true,
    filename: npm_config_output_filename || 'react/[name]/js/[name].js',
    pathinfo: true
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    '@sdp/active-video': 'ActiveVideo',
    '@sdp/active-video/dist/activeVideoLoader.js': 'activeVideoLoader',
    '@sdp/shared-ui': 'sharedUi'
  },

  entry: {
    vendor: ['react', 'react-dom'],
    [commonChunksName]: path.resolve('src', 'index.js')
  },

  devtool: '',

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/')
      ],
      use: ['cache-loader', 'babel-loader']
    }, {
      test: /\.scss$/,
      use: ['ignore-loader']
    }, {
      test: /\.css$/,
      use: ['ignore-loader']
    }, {
      test: /\.(png|jpg)$/,
      use: ['ignore-loader']
    }, {
      test: /.(woff|woff2|eot)$/,
      use: ['ignore-loader']
    }, {
      test: /\.svg/,
      use: ['ignore-loader']
    }, {
      test: /\.svg$/,
      use: ['ignore-loader']
    }]
  },

  plugins: [
    // move all node_modules and vendor required to run the app   
    new webpack.optimize.CommonsChunkPlugin({
      async: 'router',
      name: 'runtime',
      minChunks(module) {
        const context = module.context;
        let includeModule = false;
        if (context) {
          [
            '/react-router/',
            '/react-router-dom/'
          ].forEach(value => {
            includeModule = !includeModule ? context.indexOf(value) >= 0 : includeModule;
          });
        }
        return includeModule;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'build-and-price-common',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(BuildAndPrice)/).test(module.resource)) {
          return module.context && count >= 3;
        }
        return false;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'alfa-common',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(ALFA|Alfa)/).test(module.resource)) {
          return module.context && count >= 3;
        }
        return false;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'forms-common',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(UCF|Form)/).test(module.resource)) {
          return module.context && count >= 3;
        }
        return false;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'react-common',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(react-slick|react-text-mask|react-sticky)/).test(module.resource)) {
          return module.context && count >= 1;
        }
        return false;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'jquery',
      name: 'runtime',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('jquery') >= 0;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'hammerjs',
      name: 'runtime',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('hammerjs-ssr') >= 0;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'handlebars',
      name: 'runtime',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('handlebars') >= 0;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'tweenMax',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(TweenMax|gsap)/).test(module.resource)) {
          return module.context && count >= 1;
        }
        return false;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'jsapi',
      name: 'runtime',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('jsapi') >= 0;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'lodash',
      name: 'runtime',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('lodash') >= 0;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'jspdf-common',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(jspdf)/).test(module.resource)) {
          return module.context && count >= 1;
        }
        return false;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      async: 'carousel',
      name: 'runtime',
      minChunks(module, count) {
        if (module.resource && (/(UCC\/Carousel|UCC\/carousel)/).test(module.resource)) {
          return module.context && count >= 1;
        }
        return false;
      }
    }),

    // Modules must be shared between 5 entries
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 16,
      children: false,
      name: 'runtime',
      async: 'common'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    // scope hoisting (webpack 3) - each module in your bundle would be wrapped in individual function closures
    new webpack.optimize.ModuleConcatenationPlugin(),

    // (webpack 3) use identifiers instead of module names to minimize the output a bit more
    new webpack.HashedModuleIdsPlugin()

    // new SizeTestPlugin({
    //   chunks: [
    //     {
    //       name: 'react/async/common.js',
    //       minSize: 423000,
    //       maxSize: 917000,
    //       required: true
    //     }, {
    //       name: 'react/async/vendor.js',
    //       minSize: 159000,
    //       maxSize: 195000,
    //       required: true
    //     }, {
    //       name: 'react/runtime/js/runtime.js',
    //       minSize: 237000,
    //       maxSize: 291000,
    //       required: true
    //     }
    //   ],
    //   patterns: []
    // })
  ],

 
  stats: {
    children: false,
    reasons: false
  }
};


if (npm_config_dev) {
  webpackConfig.devtool = 'eval';
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

if (npm_config_analyze_bundle) {
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: __dirname + '/../../test/report.html',
      generateStatsFile: false,
      openAnalyzer: false,
      statsFilename: __dirname + '/../../test/stats.json',
      logLevel: 'info'
    })
  );
}

export default webpackConfig;
export { commonChunksName };
