const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: {
        main: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            path.join(__dirname, "./src/main.js"),
        ]
    },

    //输出位置
    output: {
        path: path.join(__dirname, './build'), //配置输出路径，文件地址，使用绝对路径形式
        filename: '[name].js',
        //关于filename 我们有个变量就是 [name] = entry的key  当然还有别的变量比如[id],[hash]等,大家可以自行发挥
        //我们也能把filename写成  filename : [name]/[name].[name].js 也是可以的
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/'
            // 公共文件生成的地址
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [path.join(__dirname, './node_modules/'), path.join(__dirname, './buildBase/')]
            }
        ]
    },
    // 这里我就只用到一个就是生成 独立的css文件,style嵌套在页面里的方式实在是丑得不行
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js'],
    },
    // 开启source-map调试模式，webpack有多种source-map，在官网文档可以查到
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ]
};
