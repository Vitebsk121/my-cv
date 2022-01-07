const path = require('path'); // нодовская фишка для работы с директорией
const HTMLWebpackPlugin = require('html-webpack-plugin'); // Плагин для работы с HTML файлом
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // Плагин для очистки папки дист
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // оптимизация файлов js (минимизация)
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // оптимизация файлов css (минимизация)




const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

console.log("Dev mode is on: ", isDev);

const optimization = () => {

  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }

  return config;
};

const babelOptions = (preset) => {

  const options = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
    ],
  };

  if (preset) {
    options.presets.push(preset)
  }

  return options;
}

module.exports = {
    mode: 'development',  // мод по у молчанию, разработка или продакшн
    entry: {  // указать входной файл (сразу путь) или объект с путями к файлам
        index: ['@babel/polyfill', './src/index.tsx'],
    },
    output: { // указать настройки бандла
        filename: '[name].[contenthash].js', // имя выходного файла например bundle.js или используй патерны
        path: path.resolve(__dirname, 'dist'), // путь выходного файлы,
        assetModuleFilename: 'assets/[hash][ext]',
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    performance: {
      maxEntrypointSize: 5120000,
      maxAssetSize: 5120000
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: 'Alexandr Demchenko CV', // тайтл для html, но не работает если задан темплейт
        template: './src/index.html', // исходный html файл
        favicon: "./src/favicon.png",
        minify: {
          collapseWhitespace: isProd
        },
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
      open: {
        app: {
         name: 'Google Chrome',
        },
      },
      static: path.resolve(__dirname, './src'),
    },
    optimization: optimization(),
    module: {
      rules: [
//         {
//           test: /\.css$/,
//           use: [MiniCssExtractPlugin.loader, 'css-loader']
//         },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: babelOptions(),
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: babelOptions(),
          }
        },
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: babelOptions('@babel/preset-react'),
          }
        },
      ]
    }
}
