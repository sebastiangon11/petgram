const htmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPWAManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new WebpackPWAManifestPlugin({
      name: 'Petgram | Tu app de fotos de mascotas',
      shortname: 'Petgram',
      description:
        'Con Petgram puedes encontrar fotos de animales domésticos facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [92, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://res.cloudinary.com|images.unsplash.com',
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://localhost:3500'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
};
