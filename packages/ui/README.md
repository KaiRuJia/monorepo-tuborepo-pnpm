# @pawpatrol/ui

A modern UI component library built with React and TypeScript.

## Installation

```bash
pnpm add @pawpatrol/ui
```

## Usage

### 全局引入

```jsx
// 引入所有组件
import { Button, Card } from '@pawpatrol/ui';
// 引入全局样式
import '@pawpatrol/ui/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Card Title">Card Content</Card>
    </div>
  );
}
```

### 按需引入

按需引入可以减少打包体积，只引入需要的组件和样式。

```jsx
// 只引入需要的组件
import Button from '@pawpatrol/ui/button';
import Card from '@pawpatrol/ui/card';

// 只引入对应组件的样式
import '@pawpatrol/ui/button/styles.css';
import '@pawpatrol/ui/card/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Card Title">Card Content</Card>
    </div>
  );
}
```

## 按需引入配置说明

本组件库支持Tree Shaking，可以通过以下方式实现按需引入：

### ESM 按需引入

```jsx
// 引入Button组件
import Button from '@pawpatrol/ui/button';
// 引入Button样式
import '@pawpatrol/ui/button/styles.css';

// 引入Card组件
import Card from '@pawpatrol/ui/card';
// 引入Card样式
import '@pawpatrol/ui/card/styles.css';
```

### CommonJS 按需引入

```jsx
// 引入Button组件
const Button = require('@pawpatrol/ui/button').default;
// 引入Button样式
require('@pawpatrol/ui/button/styles.css');

// 引入Card组件
const Card = require('@pawpatrol/ui/card').default;
// 引入Card样式
require('@pawpatrol/ui/card/styles.css');
```

### 使用构建工具插件

如果使用Webpack或Vite等构建工具，可以配置相应的插件来自动处理样式引入：

#### Vite

在vite.config.ts中添加：

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
```

#### Webpack

在webpack.config.js中添加：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

## 优势

1. **减小打包体积**：只引入需要的组件，减少不必要的代码
2. **提高加载速度**：减少网络请求和解析时间
3. **更好的代码组织**：清晰地知道项目中使用了哪些组件
4. **支持Tree Shaking**：未使用的组件会被自动剔除

## Components

### Button

```jsx
import Button from '@pawpatrol/ui/button';
import '@pawpatrol/ui/button/styles.css';

// 基本用法
<Button variant="primary">Primary Button</Button>

// 不同变体
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="text">Text Button</Button>

// 不同尺寸
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>

// 状态
<Button disabled>Disabled Button</Button>
<Button loading>Loading Button</Button>
```

### Card

```jsx
import Card from '@pawpatrol/ui/card';
import '@pawpatrol/ui/card/styles.css';

// 基本用法
<Card title="Card Title">
  Card content goes here
</Card>

// 带操作区域
<Card 
  title="Card with Actions" 
  actions={
    <div>
      <Button variant="primary" size="small">Action 1</Button>
      <Button variant="outline" size="small">Action 2</Button>
    </div>
  }
>
  Card content with actions
</Card>

// 自定义样式
<Card title="Custom Card" shadow={false} bordered={false}>
  Card with custom styling
</Card>
```

## Development

```bash
# 启动开发服务器
pnpm run dev

# 构建组件库
pnpm run build

# 预览构建结果
pnpm run preview

# 运行类型检查
pnpm exec tsc --noEmit
```

## License

MIT
