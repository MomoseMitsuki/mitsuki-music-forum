# 开发文档

<div align="center"><img src="/.github/icon.png" weight="300" height="300"></div>
<h2 align="center"><strong>🌺☘『 望月演绎厅 』🍂❄️ —— 基于nuxt开发的ACG音乐论坛</strong></h2>





# 关于网站

本站是以 ACG 为主的音乐播放网站，旨在为用户提供 更多的动漫OST 歌曲，本站具有主题切换、歌词滚动、音频可视化以及简约的UI风格，增强用户的交互体验

# 技术栈介绍

## 概述

该网站主要使用 Nuxt.js 开发

前端使用 ArtPlayer 组件以播放视频

后端为 nitro(nuxt内置)

前端采用: Nuxt.js, Vite, Vue3 + Composition API, Scss, TypeScript, Vue-Router, request-lib(fetch API), Web Audio API, canvas

后端采用: Nodejs, nitro, prisma, mongodb

其他: eslint, prettier, husky, mcp-audit

## FrontEnd

### Nuxt.js

~~为什么不用 Next.js ? 因为我 React 学得很烂 2333~~

Nuxt 最大的亮点就是在于他的全栈能力, 能够实现自动服务器端渲染(SSR), 在后端就能完成对HTML字符串的生成并发送给前端, 对 SEO 特别友好

内置了非常丰富的模块: 图像优化, 配置eslint, 配置prisma, 国际化处理...(虽然我都没怎么用哈哈哈)

通过目录来控制配置, 通过 pages 目录自动匹配路由异步组件, 通过 server/apis 目录自动匹配接口, 使我们实现 0 配置上手书写代码

有一点我个人感觉比较舒服的一点就是, 它提供了 许多 Compositable API 的 hook函数(学过 React 很清楚这个), 尤其是关于异步获取数据和发送请求, 返回一个封装好的状态(data,error,loading以及重试请求refresh),并且由于其 SSR 特性, 我们甚至可以在html到达客户端之前就已经拿到我们想要从后端获取的数据

```powershell
pnpm create nuxt@latest          # 初始构建 nuxt 项目
```

关于 nuxt.js, 你可以查看其[开发文档](https://nuxt.com/docs/getting-started/introduction)

### Vite

很经典的一个构建工具, 内部使用 rollup + esbuild 构建, 在 Nuxt.js 3 以及 Vue 3 里正式使用

它的优点在于按需导入, 先启动服务器, 需要什么文件就先请求再编译(由于dev模式在一个局域网内,所以网络I/O是特别快的),

之前也遇到过 开发模式 和 打包结果 不一样, 不过稍微配置一下也OK的

```powershell
pnpm creat Vite                 # 通过 vite 脚手架搭建工程
```

### pinia

Pinia 是 Vue 官方最推荐的状态管理库，我们在本项目中理所当然的使用了 Pinia 在 Vue 中，Pinia 一般用来做全局的数据传递 本项目的 Pinia 位于 stores 目录

- `modules/audioState.ts`: 统一管理 音频上下文、音频分析器、音频资源节点以及音频频谱分析数据, 在组件中方便复用
- `modules/audioController.ts`: 存储 歌单列表, 将 Audio 对象暴露出去供全局组件控制使用
- `modules/uiStatus.ts`: 管理 UI 上的一些状态, 将 点歌时音频的跳动 和 歌词栏 的展示...
- `modules/user.ts`: 管理用户信息
- `index.ts`: 导出所有模块

### request/fetch

在 Nuxt.js 中实际上是有提供一个请求库 ofetch 的库

但是它对 fetch 魔改的比较多, 导致我当时使用 fetch-mock 模拟响应数据时拦截不到

加之它没有聚合上层功能, 并且基于此我不得不考虑重新去实现一个请求库

你可以点击[mitsuki-request-lib](https://github.com/MomoseMitsuki/mitsuki-request-lib)查看此项目的文档

### Sass/Scss

css 预处理器(你可以理解为高级css), 让我们能够在css使用嵌套语法(我看了一下新版css好像已经实现了), 编程语法, 数据结构, 甚至于面向对象

但它们最终都会被编译为css, 本质是为了减少样式代码, 更快的开发以及降本增效

本项目使用其 map数据结构, 函数循环混合等语法 加之html自定义属性完成主题切换

- `styles/code-theme.scss`: 主题切换的Sass逻辑实现, 与一些虚类样式的集成
- `styles/global.scss`: 重置浏览器默认样式表
- `styles/variables.scss`: Sass变量存储文件

## BackEnd

### 架构

后端代码文件存储在 server 文件夹内, 采用三层模型开发

- `apis`: 根据文件目录提供路由接口
- `services`: 业务代码, 通过数据库模型进行一系列的增删改查
- `model`: 导出 prisma client

### Nitro

~~很好的自动目录接口, 使我的后端旋转~~

具有 TypeScript支持 和 多环境部署, 可在任意环境运行同一份服务端代码

它的底层核心库是 H3 , 同样也是 unjs 他们组织的产物(和 Koa中间件 的风格很相似, 但关于这个库我大致只了解这么多)

### Prisma + mongodb

一个非常现代化的 nodejs ORM 数据库框架

不写 SQL 语句, 基于它提供的 API 就能安全、高效地读写数据库

首先我们需要在 prisma/schema.prisma 内定义 表 的数据结构

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id       String      @id @default(auto()) @map("_id") @db.ObjectId
  email    String
  name     String      @unique
  avater   String
  password String
  Lists    MusicList[] @relation(fields: [ListIds], references: [id])
  ListIds  String[]    @db.ObjectId
}
// ...
```

通过 `pnpm prisma:generator && pnpm prisma:push` 去生成 Prisma Client 并建立起表的结构

## Others

### eslint & prettier

代码规范 和 代码美化 的一个工具, 详细配置在目录下的 eslint.config.mjs 和 .prettierrc

### husky

为什么我们要用到 husky？

我们有一个需求，在每次代码提交时将 package.json 中的 version 增加 0.0.1

根据这个需求，我们需要在 git 的 pre-commit 这个 hook 中执行某些代码，更改 version 字段

### mcp-audit

这是独立于网站的一个项目!

我们在进行技术选型时需要甄别出有漏洞的包, 发现其是否包含潜藏的风险, 但因为本地 npm audit 审查的结果难以阅读, 并且无法对远程仓库进行审计

于是我们基于 MCP Server协议, Git API 和 nodejs + mcp/sdk 构建的对 本地/远程的 package 包 及其依赖进行安全依赖审计

具体文档请查看[mcp-audit](https://github.com/MomoseMitsuki/mitsuki-mcp-audit)

审计结果保存在目录下的 audit.md

# 启动&使用

## 前置要求

请安装 nodejs v20+ (可以使用nvm控制nodejs版本) 和 mongodb v8.0+

在此之后, 请在 .env 文件内配置你的 mongodb 本地链接

## 启动

```powershell
pnpm install            # 安装依赖
pnpm prisma:generate    # 根据 schema 生成 Prisma Client
pnpm prisma:push        # 将 Prisma schema 同步到数据库（不生成迁移文件）
```

dev 启动

```powershell
pnpm dev
```

如果你看到

```powershell
Nuxt 3.17.5 with Nitro 2.11.12                                                                                                                 nuxi 23:58:28
                                                                                                                                                    23:58:28

              █▀▀▀▀▀▀▀█▀█▀█▀█▀███▀▀▀▀▀▀▀█
              █ █▀▀▀█ █▀  ▄▄  ▀██ █▀▀▀█ █
              █ █   █ █ ▄▄▀ ▄█▀██ █   █ █
              █ ▀▀▀▀▀ █▀█ ▄▀▄▀█▀█ ▀▀▀▀▀ █
              █▀▀▀▀██▀█▀█ ▀ ███▄▀██▀▀▀█▀█
              █▀█▄█  ▀█▄▀ ▀   █▀ ██▀██▄██
              ██▀ ▀▀▄▀ ▄  █▀ █▀ █▀ ▀▄ ▀▀█
              ██▀█▄  ▀█▀ ▀ ▄██▄▀  █▄█▀▀▄█
              █▄█▀ ▄ ▀▄█ ▄▄█▀ ▀ ▀▀▀▀ ▀▀ █
              █▀▀▀▀▀▀▀█▄▄▄██▄▄█ █▀█ ▀▀▀ █
              █ █▀▀▀█ ██ ▄▀▄█▄█ ▀▀▀ ███▀█
              █ █   █ █ █▄ ▄█  ▄█ ▄ ▀  ▄█
              █ ▀▀▀▀▀ █ ▄▄██ █ █▄█▀ ▀ ▀▀█
              ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

  ➜ Local:    http://localhost:3000/
  ➜ Network:  http://100.66.15.31:3000/ [QR code]
  ➜ Network:  http://192.168.182.1:3000/
  ➜ Network:  http://192.168.213.1:3000/
  ➜ Network:  http://26.103.102.21:3000/

✔ Vite client built in 126ms                                                                                                                       23:58:34
✔ Vite server built in 1625ms                                                                                                                      23:58:36
✔ Nuxt Nitro server built in 1964ms                                                                                                          nitro 23:58:39
ℹ Vite client warmed up in 5ms                                                                                                                     23:58:39
ℹ Vite server warmed up in 1837ms
```

那么恭喜你运行成功了, 打开浏览器访问提示的 Local 或 Network 地址即可看到项目
