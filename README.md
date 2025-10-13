# 开发文档

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

# 技术栈

- 使用 [Nuxt.js](https://nuxt.com/docs/getting-started/introduction) + TypeScript 实现 Vue SSR
- ArtPlayer 视频组件库 与 canvas 音频可视化
- Sass 处理样式 与 主题切换
- 集成 eslint(@nuxt/eslint) 和 prettierrc 进行代码审查
- 基于 husky 的 git hook进行更新 package.json 和 代码审查
- 自行设计 请求库 mitsuki-request-lib 完成请求的上层功能,通过 DIP 解耦库的层级
- 使用 ORM 框架 prisma 操作数据库 mongodb

# 如何使用

```powershell
pnpm install
pnpm dev
```
