# @pawpatrol/utils

# node veriosn: v20.19.0
一个实用的工具函数库，提供字符串处理、数字操作等常用功能，支持按需加载和 TypeScript 类型定义。

## 安装

```bash
# 使用 pnpm
pnpm add @pawpatrol/utils

# 使用 npm
npm install @pawpatrol/utils

# 使用 yarn
yarn add @pawpatrol/utils
```

## 功能特性

- 📦 **按需加载**：支持按模块导入，减小打包体积
- 🔧 **TypeScript 支持**：完整的类型定义
- 🎯 **双格式输出**：同时支持 ES 模块和 CommonJS
- 📝 **详细文档**：完善的 API 文档和使用示例
- 🔄 **易于扩展**：模块化设计，方便添加新功能

## 使用方法

### 完整导入

```javascript
import * as utils from '@pawpatrol/utils';

console.log(utils.capitalize('hello')); // Hello
console.log(utils.formatNumber(123.456)); // 123.46
```

### 按需导入

```javascript
// 导入特定模块
import { capitalize, truncate } from '@pawpatrol/utils/string';
import { formatNumber, clamp } from '@pawpatrol/utils/number';

// 使用示例
console.log(capitalize('hello')); // Hello
console.log(truncate('This is a long string', 10)); // This is a...
console.log(formatNumber(123.456)); // 123.46
console.log(clamp(15, 0, 10)); // 10
```

## API 文档

### 字符串工具 (`@pawpatrol/utils/string`)

#### `capitalize(str: string): string`
将字符串的首字母转换为大写。

**参数：**
- `str`: 要转换的字符串

**返回值：**
首字母大写的字符串

**示例：**
```javascript
capitalize('hello'); // 'Hello'
capitalize('world'); // 'World'
```

#### `truncate(str: string, length: number, suffix?: string): string`
截断字符串到指定长度，并添加省略号（可选）。

**参数：**
- `str`: 要截断的字符串
- `length`: 最大长度
- `suffix`: 省略号字符串，默认为 `'...'`

**返回值：**
截断后的字符串

**示例：**
```javascript
truncate('This is a long string', 10); // 'This is a...'
truncate('Hello', 10); // 'Hello' (字符串长度未超过限制)
truncate('This is a test', 5, '***'); // 'This***'
```

#### `camelCaseToSnakeCase(str: string): string`
将驼峰式命名转换为蛇形命名。

**参数：**
- `str`: 驼峰式命名的字符串

**返回值：**
蛇形命名的字符串

**示例：**
```javascript
camelCaseToSnakeCase('helloWorld'); // 'hello_world'
camelCaseToSnakeCase('userName'); // 'user_name'
```

### 数字工具 (`@pawpatrol/utils/number`)

#### `formatNumber(num: number, decimals?: number): string`
格式化数字到指定的小数位数。

**参数：**
- `num`: 要格式化的数字
- `decimals`: 小数位数，默认为 2

**返回值：**
格式化后的数字字符串

**示例：**
```javascript
formatNumber(123.456); // '123.46'
formatNumber(123.4); // '123.40'
formatNumber(123.456, 1); // '123.5'
```

#### `clamp(num: number, min: number, max: number): number`
将数字限制在指定的范围内。

**参数：**
- `num`: 要限制的数字
- `min`: 最小值
- `max`: 最大值

**返回值：**
限制在范围内的数字

**示例：**
```javascript
clamp(15, 0, 10); // 10
clamp(-5, 0, 10); // 0
clamp(5, 0, 10); // 5
```

#### `randomInRange(min: number, max: number): number`
生成指定范围内的随机数。

**参数：**
- `min`: 最小值（包含）
- `max`: 最大值（不包含）

**返回值：**
指定范围内的随机数

**示例：**
```javascript
randomInRange(0, 10); // 例如：5.4321
randomInRange(1, 2); // 例如：1.5678
```

## 开发

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm run dev

# 运行调试脚本
pnpm run start

# 监听模式运行调试
pnpm run debug
```

### 构建

```bash
pnpm run build
```

### 生成更新日志

```bash
# 初始化更新日志
pnpm run changelog:init

# 更新最新版本的更新日志
pnpm run changelog
```

## 版本发布

1. 更新版本号（遵循语义化版本规范）
2. 运行 `pnpm run changelog` 生成更新日志
3. 提交代码并创建标签

## 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 文件了解版本变更历史。

## 许可证

MIT License
