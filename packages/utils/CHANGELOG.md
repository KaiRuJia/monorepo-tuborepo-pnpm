# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2024-01-25

### Added
- 初始版本发布
- 字符串工具函数：
  - `capitalize()` - 将字符串首字母大写
  - `truncate()` - 截断字符串并添加省略号
  - `camelCaseToSnakeCase()` - 将驼峰式命名转换为蛇形命名
- 数字工具函数：
  - `formatNumber()` - 格式化数字为指定小数位数
  - `clamp()` - 将数字限制在指定范围内
  - `randomInRange()` - 生成指定范围内的随机数
- 支持 ES 模块和 CommonJS 格式
- 实现按需加载功能
- 提供 TypeScript 类型定义

### Changed
- 项目重命名为 `@pawpatrol/utils`

### Fixed
- 修复格式化数字时的精度问题

[Unreleased]: https://github.com/your-repo/utils/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/your-repo/utils/releases/tag/v1.0.0
