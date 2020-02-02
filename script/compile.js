const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const copy = require('./highcopy');
const rootPath = path.resolve(__dirname, '../')
const srcPath = path.resolve(rootPath, './src');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const entries = function () {
    //执行同步全局搜索，返回{array<string>}文件名数组对象
    const map = new Map()
    const entryFiles = glob.sync(srcPath + '/**/*.{ts,tsx}')
    for (let index = 0; index < entryFiles.length; index++) {
        const filePath = entryFiles[index];
        const filename = filePath.substring(srcPath.length, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }

    return map;
}

const config = {
    entry: entries(),
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", "less"]
    },
    output: {
        publicPath: path.resolve(rootPath, "./dist"),
        path: path.resolve(rootPath, "./dist"),
        filename: "[name].js",
        globalObject: 'this',
        libraryTarget: 'umd',
        library: 'pitaya'
    },
    optimization: {
        minimize: false
    },
    module: {//用于配置所有第三方模块加载器
        rules: [//第三方模块加载器的规则
            {
                test: /\.tsx?$/, use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(rootPath, "./tsconfig.json")
                    }
                }
            },
            //处理.css文件的第三方loader规则
            {
                test: /\.css$/, use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]:[hash:base64:5]',
                            },
                        }
                    }]
            },
            //处理.less文件的第三方loader规则
            {
                test: /\.less$/, use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {},
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]:[hash:base64:5]',
                        },
                    }
                }, 'less-loader']
            },

            //处理图片路径的loader
            { test: /\.(jpg|jpeg|png|pneg|gif|bmp)$/, use: 'url-loader' },
            //处理字体文件
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
    ],
    externals: {
        'react': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        },
    }
}

const compiler = webpack(config)
compiler.run()


copy(
    path.resolve(rootPath, './src'), // form
    path.resolve(rootPath, './dist'), // to
    ['less'] // 格式
)


// const tsc = require('typescript/lib/typescript')
// console.log(tsc.parseCommandLine)