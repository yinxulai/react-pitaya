const path = require('path')
const glob = require('glob')
const rollup = require('rollup')
const copy = require('./highcopy')
const commonjs = require('rollup-plugin-commonjs')
const less = require('@yinxulai/rollup-plugin-less')
const resolve = require('rollup-plugin-node-resolve')
const typescript = require('rollup-plugin-typescript')
const external = require('rollup-plugin-peer-deps-external')

// 目录设定
const rootPath = path.resolve(__dirname, '../')
const srcPath = path.resolve(rootPath, './src')
const distPath = path.resolve(rootPath, './lib')

function entries() {
  //执行同步全局搜索，返回{array<string>}文件名数组对象
  const fileList = new Array()
  const entryFiles = glob.sync(srcPath + '/**/*.{ts,tsx}')
  for (let index = 0; index < entryFiles.length; index++) {
    const filePath = entryFiles[index];
    const filename = filePath.substring(srcPath.length);
    fileList.push(filename)
  }

  return fileList
}

async function build() {
  // see below for details on the options
  const inputOptions = {
    input: null,
    plugins: [
      resolve(),
      external(),
      commonjs(),
      typescript(),
      less({ cssModule: { camelCase: true }, insert: true }),
    ]
  }

  const outputOptions = {
    file: null,
    sourcemap: true
  }

  return Promise.all(entries().map(
    async entrie => {
      const input = {
        ...inputOptions,
        input: srcPath + entrie
      }

      const output = {
        ...outputOptions,
        file: (distPath + entrie).replace(/\.\w*$/, '.js')
      }

      const bundle = await rollup.rollup(input)
      // const output = await bundle.generate(outputOptions)

      await bundle.write(output)
    }
  ))
}

build()
  .then(() => {
    copy(
      path.resolve(rootPath, './src/styles'), // form
      path.resolve(rootPath, './lib/styles'), // to
      ['less'] // 格式
    )
  }).catch(err => console.error(err));
