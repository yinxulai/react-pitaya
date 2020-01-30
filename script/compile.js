const path = require('path');
const copy = require('./highcopy');
// const tsc = require('typescript/lib/typescript')
// console.log(tsc.parseCommandLine)
copy(path.resolve(__dirname, '../src'), path.resolve(__dirname, '../dist'), ['less'])