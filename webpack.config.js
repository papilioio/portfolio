const path = require('path');
const webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: "./src/main.tsx",
    devServer: {
        contentBase: './docs'
    },
    output: {
        path: __dirname + "/docs",
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".png", ".pdf", ".css"],
        modules: ["node_modules",path.resolve(__dirname, "react")],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif|pdf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false,
        }),
        // Indicate the package source based on the name
        // So we don't have to map them manually in the `alias` option as 
        //  alias: {
        //      '@react-pdf-viewer/core/lib/styles.css': path.join(__dirname, '../packages/core/lib/styles.css'),
        //      '@react-pdf-viewer/core': path.join(__dirname, '../packages/core/src'),
        //      ...
        //  }
        new webpack.NormalModuleReplacementPlugin(
            // The pattern covers the package and its CSS
            // @react-pdf-viewer/core
            // @react-pdf-viewer/core/lib/styles/index.css
            /^@react-pdf-viewer\/[a-z-]+[\/styles]*[\/index.(css)]*$/,
            resource => {
                const request = resource.request;
                const pkgName = request.split('/')[1];

                switch (true) {
                    case request.endsWith('.css'):
                        resource.request = path.join(__dirname, `../packages/${pkgName}/lib/styles/index.css`);
                        break;

                    // case request.endsWith('.less'):
                    //     resource.request = path.join(__dirname, `../packages/${pkgName}/lib/styles/index.less`);
                    //     break;

                    default:
                        resource.request = path.join(__dirname, `../packages/${pkgName}/src`);
                        break;
                }
            }
        ),
    ],
}