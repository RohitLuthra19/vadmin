import * as webpack from 'webpack';
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=assets/[name].[ext]"}
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { 
                baseDir: __dirname,
                
            },
            startPath: 'index.html'
            //server: { baseDir: ['dist'] },proxy: './index.html'
            //server: { baseDir: __dirname + '/index.html'}
        })
    ]
};

export default config;
