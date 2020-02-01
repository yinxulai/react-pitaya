const glob = require('glob');
const path = require('path');
const srcPath = path.resolve(__dirname, './src');

var entries = function () {
    //执行同步全局搜索，返回{array<string>}文件名数组对象
    var entryFiles = glob.sync(srcPath + '/**/*.{ts,tsx}')
    var map = {};
    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(srcPath.length, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
}

console.log(entries())

const config = {
    mode: "production",
    resolve: {
        extensions: [".ts", ".tsx", "less"]
    },
    entry: entries(),
    output: {
        publicPath: path.resolve(__dirname, "./dist"),
        path: path.resolve(__dirname, "./dist/"),
        chunkFilename: '[name].js',
        filename: "[name].js",
        libraryTarget: 'umd',
        library: 'pitaya'
    },
    module: {//用于配置所有第三方模块加载器
        rules: [//第三方模块加载器的规则
            {
                test: /\.tsx?$/, use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, "./tsconfig.json")
                    }
                }
            },
            //处理.css文件的第三方loader规则
            {
                test: /\.css$/, use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            //处理.less文件的第三方loader规则
            {
                test: /\.less$/, use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, 'less-loader']
            },

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

// function travel(dir) {
//     let star = null
//     let dirStar = null
//     dir = path.resolve(dir);

//     try {
//         star = fs.statSync(dir)
//     } catch (e) {
//         console.error('Error:', err);
//     }

//     if (!star) return console.error('Error:', 'star is null');


//     if (star.isFile()) {
//         const extName = path.extname(path.resolve(dir)).substr(1);
//         return ['ts','tsx'].includes(extName) && config.entry.push(dir)
//     }

//     try {
//         dirStar = fs.readdirSync(dir)
//     } catch (e) {
//         console.error('Error:', err);
//     }

//     if (!dirStar) return console.error('Error:', 'dirStar is null');

//     dirStar.forEach(file => {
//         travel(path.join(dir, file));
//     });

// }

module.exports = config