// 测试按需加载功能

// 完整导入
const utils = require('./packages/utils/dist/index.js');
console.log('完整导入 - capitalize:', utils.capitalize('hello'));

// 按需导入 - 仅导入string模块
const { capitalize } = require('./packages/utils/dist/string.js');
console.log('按需导入 - capitalize:', capitalize('world'));

// 按需导入 - 仅导入number模块
const { formatNumber } = require('./packages/utils/dist/number.js');
console.log('按需导入 - formatNumber:', formatNumber(123.4567, 2));
