var path =                require("path");
var webpack =             require("webpack");
var ExtractTextPlugin =   require("extract-text-webpack-plugin");

module.exports = function(_path) {
  // define local variables
  //var dependencies  = Object.keys(require(_path + '/package').dependencies);
  //var rootAssetPath = _path + 'src';
  // return objecy
  return {
        entry: {
            app: ["./src"]
        },
        output: {
            path: path.join(_path, "docs"),
            publicPath: "/",
            filename: "script.js"
        },
        module: {
            preLoaders: [
                    {
                      test: /(\.js|\.jsx)$/,
                      exclude: /node_modules/,
                      loader: 'eslint-loader'
                    },
                ],
            loaders: [
                {
                    test: /\.js$/,
                    loader: "babel",
                    query: {
                        presets: ['es2015'],
                        plugins: ["transform-class-properties"]
                    }
                },
                {
                    test: /\.jsx$/,
                    loader: "babel",
                    query: {
                        presets: ['es2015', 'react'],
                        plugins: ["transform-class-properties"]
                    }
                },
                {
                    test: /\.pug$/,
                    loader: "pug-loader"
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract(["css-loader"])
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract(["css-loader", "less-loader"])
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('style.css')
        ],
        resolve: {
            modulesDirectories: ["node_modules", "src"],
            extensions: ["", ".js", ".jsx"]
        },
        eslint: {
            configFile: path.join(_path, ".eslintrc")
        },
        externals: {
            'cheerio': 'window',
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true
        }
    };
};