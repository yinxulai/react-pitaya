const fs = require('fs');
const path = require('path');

/**
* @name checkDstDir
* @description 判断目标文件夹是否存在 如果不存在则新建目标文件夹
* @param {String} dir 
*/
function checkDstDir(dir) {
    if (!fs.existsSync(path.resolve(dir))) {
        fs.mkdirSync(path.resolve(dir), { recursive: true });
    }
}

/**
* @name checkFileExtName
* @description 判断文件后缀名是否符合要求
* @param {String} src 
* @param {String} ext ext 是通过 / 进行分割的字符串 通过正则匹配
*/
function checkFileExtName(src, ext) {
    const extName = path.extname(path.resolve(src)).substr(1);
    return ext.includes(extName);
}

/**
* @name copyFileByStream
* @description 使用流传输 copy 文件
* @param {String} from 
* @param {String} to 
*/
function copyFileByStream(from, to) {
    checkDstDir(path.dirname(to))
    fs.createReadStream(path.resolve(from))
        .pipe(fs.createWriteStream(path.resolve(to)));
}

/**
 * @name travelCallback
 * @description 遍历文件的回调方法 在回调方法中调用文件类型判断及文件类型读写操作
 */
function travelCallback(file, from, to, pattern) {
    if (checkFileExtName(file, pattern)) {
        const tofile = path.join(to, file.slice(from.length))
        copyFileByStream(file, tofile);
        console.log('[Copy Done]：' + file);
    }
}


/**
* @name travel
* @description 遍历文件夹操作
* @param {String} dir 
* @param {function} callback 
*/
function travel(dir, callback) {
    dir = path.resolve(dir);
    fs.stat(dir, (err, stats) => {
        console.log('222', err, stats)
        if (err) return console.error('Error:', err);
        if (!stats.isDirectory()) {
            callback(dir);
            return;
        }

        fs.readdir(dir, (err, files) => {
            if (err) return console.error('Error:', err);
            files.forEach((file) => {
                travel(path.join(dir, file), callback);
            });
        });
    });
}

/**
* @name main
* @description 主函数
*/

module.exports = function copy(from, to, pattern) {
    checkDstDir(to);
    travel(from, file => {
        travelCallback(file, from, to, pattern)
    });
}