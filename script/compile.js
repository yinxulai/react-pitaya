const path = require('path');
const webpack = require('webpack');
// const copy = require('./highcopy');
const rootPath = path.resolve(__dirname, '../')
// copy(
//     path.resolve(rootPath, './src'), // form
//     path.resolve(rootPath, './dist'), // to
//     ['less'] // 格式
// )

const compiler = webpack({
    mode: "production",
    entry: path.resolve(rootPath, './src/index.ts'),
    output: {
        publicPath: path.resolve(rootPath, "dist"),
        path: path.resolve(rootPath, "dist"),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    module: {//用于配置所有第三方模块加载器
        rules: [//第三方模块加载器的规则
            { test: /\.tsx?$/, use: { loader: 'ts-loader' } },
            //处理.css文件的第三方loader规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理.less文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片路径的loader
            { test: /\.(jpg|jpeg|png|pneg|gif|bmp)$/, use: 'url-loader' },
            //处理字体文件
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }
        ]
    },
    externals: [
        {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    ]
})

compiler.run((err, stats) => err && console.log(err))


// const tsc = require('typescript/lib/typescript')
// console.log(tsc.parseCommandLine)