// 调试入口文件
import { capitalize, truncate } from './string';
import { formatNumber, clamp, randomInRange } from './number';

// 测试字符串工具函数
console.log('=== String Utils ===');
console.log('capitalize("hello world"):', capitalize('hello world'));
console.log('truncate("This is a long string", 10):', truncate('This is a long string', 10));

// 测试数字工具函数
console.log('\n=== Number Utils ===');
console.log('formatNumber(123.4567, 2):', formatNumber(123.4567, 2));
console.log('clamp(5, 1, 10):', clamp(5, 1, 10));
console.log('clamp(15, 1, 10):', clamp(15, 1, 10));
console.log('randomInRange(1, 10):', randomInRange(1, 10));
