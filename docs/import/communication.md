# 通信工程导入

- :frog: 本软件支持低等级公路与高速公路通信管道的自动化布设。

路线整理模式与护栏整理模式相同。

:::tip 文件整理及命名

- :star: 低等级公路 将<直曲转角表>文件改名为：<主线.xlsx>，名称必须包含<主线>二字。

- :star: 填挖方数据文件<主线.tf>，文件名称必须和中线文件同名。

![images](/import/guardrail/Low-grade.png)

- :star: 高速公路设计（无分离式路基）与低等级公路相同。

:::

:::warning 高速公路设计（含分离式路基）

- :star: 主线右幅文件：<主线右幅.xlsx >，必须包含“主线右幅”文字。

- :star: 主线左幅文件：<主线左幅-X.xlsx >，必须包含“主线左幅”文字。

- :star: 填挖方数据文件必须和中线文件同名。

![images](/import/guardrail/highway1.png)

:::

1、导入路线数据

![images](/import/communication/communication-line.png)

2、导入断链数据（与标志、标线、护栏等其它专业同理）

![images](/import/communication/communication-line-cut.png)

3、导入构造物数据（与标志、标线、护栏等其它专业同理）

![images](/import/communication/communication-bridge.png)

4、本章节为 **护栏** 数导入。

```txt
标线
├─ 直曲转角表
├─ 断链表
└─ 构造物表
```
