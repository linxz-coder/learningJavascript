const fs = require('fs'); // 所有global的module都是这样引入的
//console.log(process.argv); // process是一个global的module，argv是一个数组，包含了命令行参数
const file = process.argv[2]; // process.argv是一个数组，第一个元素是node，第二个元素是脚本文件名，后面的元素是命令行参数
lines = fs.readFileSync(file).toString().split('\n') //fs.readFileSync(file)返回一个buffer，toString()将buffer转换为string，split()将string转换为array;
//buffer是一个类似于array的object，但是它的元素是16进制的数字，而且它的大小是固定的，不能改变
console.log(lines.length - 1); // 为什么要减1？因为最后一行是空行，不算在内

// 官方解答
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1