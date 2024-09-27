# 交通工程数字化设计系统官方文档

[![images](https://img.shields.io/badge/GitHub-交通工程数字化设计系统官方文档-blueviolet?style=flat-square&logo=github)](https://github.com/stephenchou888/ccshcc-dds-docs)
[![images](https://img.shields.io/badge/Cloudflare-交通工程数字化设计系统官方文档-orange?style=flat-square&logo=cloudflare)](https://jtgcdds.cn)

交通工程数字化设计系统官方文档前端页面源代码，使用 [Hugo](https://gohugo.io/) 架构搭配 [Hextra](https://github.com/imfing/hextra) 主题设计并配置。

## 部署方式

基于 Cloudflare Pages 部署，详情参考 [Cloudflare Pages 官方文档](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/) 提供的说明。

## 目录架构

文档内容包括在 `docs` 中，比如图片在内的静态资源则存储在 `static` 中。

完整的目录结构如下：

```
.
├── archetypes
├── assets
├── content
├── hugo.yaml
├── i18n
├── preview
├── public
├── README.md
├── static
└── themes
```

## 本地调试

本地调试建议建立 `preview` 站点进行预览，并用软链接方式进行调试，从而保障生产环境不受影响。具体配置方式如下：

首先创建一个预览站点：

```
hugo new site preview --format=yaml
cd ./preview
```

将 Hextra 主题作为模块添加：

```
git submodule add -f https://github.com/imfing/hextra.git themes/hextra
```

由于仓库里的生产环境部分已经包含了 Hextra 模块，所以这里用 `-f` 强制添加，**请注意在这里强制添加之后要在 `.gitmodules` 里面将我们强制添加的这部分去掉。**

接下来创建一些软链接引入生产环境中的内容：

```
rm -rf ./assets ./content ./i18n ./static ./hugo.yaml
ln -s ../assets ./assets
ln -s ../content ./content
ln -s ../i18n ./i18n
ln -s ../static ./static
ln -s ../hugo.yaml ./hugo.yaml
```

运行测试环境：

```
hugo server -D
```

然后就可以访问 `localhost:1313` 调试本地预览环境了。
