const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    mode: 'production',
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    devServer: {
        overlay: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: [
                { 
                    loader: MiniCssExtractPlugin.loader,
                    options: { hmr: process.env.NODE_ENV === "development" }
                }, 
                "css-loader"
                ]
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin({ filename: '[name].css' }) 
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
}