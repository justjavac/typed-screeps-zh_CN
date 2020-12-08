# screeps-types-zh_CN

> Screeps 的 TypeScript 类型定义文件（简体中文版）。

本项目的初衷是为 [screeps-typescript-starter-zh_CN](https://github.com/justjavac/screeps-typescript-starter-zh_CN) 提供中文类型定义文件。
现在独立发型了 npm 包 [@screepscn/types](https://www.npmjs.com/package/@screepscn/types)，可用于任何 nodejs 项目。

## 安装

你可以使用 npm 或者 yarn 安装：

```shell
# npm
npm install @screepscn/types

# yarn
yarn add @screepscn/types
```

## 使用

在需要使用类型的地方添加 reference:

```ts
/// <reference types="@screepscn/types" />
```

或者在源码根目录新建 `types.d.ts` 文件，顶部增加 reference 代码。

## 鸣谢

本项目内容翻译来自：<https://screeps-cn.github.io/api/> 做了部分修改，感谢翻译者们的贡献。
