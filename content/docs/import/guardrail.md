+++
title = "护栏数据导入"
weight = 3
+++

{{< callout type="info" >}}
本文介绍使用护栏A与护栏B两种功能模式进行使用进行
{{< /callout >}}

**1. 数据准备阶段详见[数据整理](/data/readme.md)帮助文档**

👋 主线（**低等级道路或者高速，同时支持国际项目中的DIY式原则转换布设**）：

- 如果数据齐全，包括桥表、隧道表、填挖方数据都比较完整，可以采用全自动化的模式进行，参考主线自动设计模式。

- 如果数据不齐全，甚至只有一张总体图，则采用半自动模式进行设计。

- 如果只有部分数据，比如桥隧表，可以先按照全自动模式进行设计，并将护栏绘制到总体图上，然后用编辑工具进行修正。

- 综上所述，所谓B模式仅仅是加入了互通人工干预布设的A模式加强版。

- **A、B模式最终版会进行功能合并形成全新版本护栏自动化布设工具集。**

- 护栏布设思维导图

{{< callout type="info" >}}
![images](/img/docs/import/guardrail/guardrailinto.webp)
{{< /callout >}}

## 一、护栏自动化布设模式A

模式A为常见的主线自动化布设功能模式

{{< callout type="info" >}}
- 文件整理及命名

- 低等级公路 将<直曲转角表>文件改名为：<主线.xlsx>，名称必须包含<主线>二字。

- 填挖方数据文件<主线.tf>，文件名称必须和中线文件同名。

![images](/img/docs/import/guardrail/Low-grade.webp)

- 高速公路设计（无分离式路基）与低等级公路相同。
{{< /callout >}}

{{< callout type="warning" >}}
- 高速公路设计（含分离式路基）

- 主线右幅文件：<主线右幅.xlsx >，必须包含“主线右幅”文字。

- 主线左幅文件：<主线左幅-X.xlsx >，必须包含“主线左幅”文字。

- 填挖方数据文件必须和中线文件同名。

![images](/img/docs/import/guardrail/highway1.webp)
{{< /callout >}}

## 二、护栏自动化布设模式B

模式B为常见的主线自动化布设功能模式外，还支持互通段护栏布设与人工交互布设多种组合。

## 三、互通立义

- 中线采用软件路线提取，名称见下图。

- 互通立交不需要填挖方数据。

![images](/img/docs/import/guardrail/roadtouch.webp)

![images](/img/docs/import/guardrail/interchange.webp)

## 四、本章节为护栏数据导入

```txt
护栏
├─ 直曲转角表
├─ 断链表
├─ 构造物表
└─ 标段划分表（仅需要标段划分时使用）
```
