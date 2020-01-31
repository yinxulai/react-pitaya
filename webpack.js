const fs = require('fs');
const path = require('path');
const srcPath = path.resolve(__dirname, './src');
const config = {
    mode: "production",
    resolve: {
        extensions: [".ts", ".tsx", "less"]
    },
    entry: [],
    output: {
        publicPath: path.resolve(__dirname, "./dist"),
        path: path.resolve(__dirname, "./dist/"),
        filename: "[name].js",
        libraryTarget: 'umd',
        library: 'pitaya'
    },
    module: {//用于配置所有第三方模块加载器
        rules: [//第三方模块加载器的规则
            { test: /\.tsx?$/, use: { loader: 'ts-loader' } },
            //处理.css文件的第三方loader规则
            { test: /\.css$/, use: ['style-loader', { loader: 'css-loader', options: { modules: true } }] },
            //处理.less文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', { loader: 'css-loader', options: { modules: true } }, 'less-loader'] },
            //处理图片路径的loader
            { test: /\.(jpg|jpeg|png|pneg|gif|bmp)$/, use: 'url-loader' },
            //处理字体文件
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }
        ]
    },
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

fs.stat(srcPath, (err, stats) => {
    console.log(dir, stats, 22222)
    if (err) return console.error('Error:', err);

    if (!stats.isFile()) {
        return config.entry.push(stats)
    }

    if (stats.isDirectory()) {
        fs.readdir(dir, (err, files) => {
            if (err) return console.error('Error:', err);
            files.forEach(file => {
                return travel(path.join(dir, file));
            });
        });
    }
});

console.log(33333)
console.log(config.entry)




module.exports = config