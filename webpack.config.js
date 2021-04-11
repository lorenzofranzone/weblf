const path = require('path');
const webpack = require('webpack');

module.exports = {
   mode: 'development',
   entry: [ 
      './src/js/main.js', 
      './src/js/owl-carousel.js', 
      './src/js/gsap.js' 
   ],
   output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'app.js',
   },
   plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
   ],
   module: {
      rules:[
       {
          test: /.(scss|css)$/,
          use:
          [
             {
                options: { reloadAll: true },
             },
             'css-loader',
             'sass-loader',
             'node-sass'
          ]
       }
      ]
   }
};
// module.exports = {
//    mode: 'development',
//    entry: {
//       main: './src/js/main.js',
//       owlCarousel: './src/js/owl-carousel.js',
//       gsap: './src/js/gsap.js',
//    },
//    output: {
//       path: path.resolve(__dirname, 'dist/js'),
//       filename: '[name].bundle.js',
//    },
//    // optimization: {
//    //    runtimeChunk: 'single',
//    // },
//    plugins: [
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery'
//       }),
//    ],
//    module: {
//       rules:[
//        {
//           test: /.(scss|css)$/,
//           use:
//           [
//              {
//                 options: { reloadAll: true },
//              },
//              'css-loader',
//              'sass-loader',
//              'node-sass'
//           ]
//        }
//       ]
//    }
// };