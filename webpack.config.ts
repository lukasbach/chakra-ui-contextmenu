import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: './src/index.ts',
  target: 'web',
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
    library: 'ChakraUiContextMenu',
    libraryTarget: 'umd',
  },
  externals: {
    'react': 'react',
    'react-dom': 'reactDOM',
    '@chakra-ui/react': 'chakraUiReact'
  },
};

export default config;