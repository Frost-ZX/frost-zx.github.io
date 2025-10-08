---
title: Windows 实用小工具推荐
date: 2025-03-16T16:18:24Z
lastmod: 2025-03-16T16:19:42Z
tags: [推荐,软件,Windows]
---

# Windows 实用小工具推荐

软件名称：DeskPins、LICEcap、OnTopReplica、PiP-Tool

已测试系统：Windows 7、Windows 10

---

## DeskPins - 将任意的窗口置顶

### 简介

我们经常需要打开多个软件窗口，有时可能需要让某个窗口保持置顶显示，方便查看。

但是部分软件没有内置“置顶”功能，而且 Windows 也没有提供相关功能。

这时候就可以借助 `DeskPins` 这个小工具，让任意窗口置顶显示。

### 使用方法 / 功能介绍

安装并运行软件后，可以在任务栏托盘中看到软件的图标：

![](https://c.frost-zx.top/data/uploads/blog/windows-useful-tools/DeskPins_01.png)

右键图标，可以打开它的菜单：

![](https://c.frost-zx.top/data/uploads/blog/windows-useful-tools/DeskPins_02.png)

点击右键菜单中的 `Options...`，打开设置选项界面：

- 设置图钉图标的样式（颜色、跟踪速率）以及托盘图标激活方式（单击 / 双击）  
  ​![](https://c.frost-zx.top/data/uploads/blog/windows-useful-tools/DeskPins_03.png)
- 设置自动置顶窗口

  > 试了下，设置之后好像没有效果，可能规则没写对？
  >

  ![](https://c.frost-zx.top/data/uploads/blog/windows-useful-tools/DeskPins_04.png)
- 设置快捷键  
  ​![](https://c.frost-zx.top/data/uploads/blog/windows-useful-tools/DeskPins_05.png)

在需要置顶窗口时，可以通过以下三种方式之一进入 `Pin Mode`​

- 单击或双击托盘图标（由 `TrayIcon Activation` 设置决定）
- 点击右键菜单中的 `Enter pin mode`​
- 按下快捷键（默认 `Ctrl` + `F11`）

进入 `Pin Mode` 后（此时鼠标指针的样式会变为图钉），点击目标窗口即可将其置顶；

也可直接按下快捷键（默认 `Ctrl` + `F12`）将当前窗口置顶。

置顶的窗口上方会有一枚“图钉”，点击它可以取消置顶（也可以点击右键菜单中的 `Remove all pins` 取消全部）。

![](https://c.frost-zx.top/data/uploads/blog/windows-useful-tools/DeskPins_06.png)

## LICEcap - GIF 录屏工具

### 简介

LICEcap 是一款免费、开源的 GIF 录制软件。

启动软件后，会显示一个内部透明的窗口框，它可以将框内的内容录制下来并保存为 GIF 格式的图片。

网站：[https://www.cockos.com/licecap/](https://www.cockos.com/licecap/)

### 特性

- 直接录制为 .GIF 或 .LCF 文件。
- 录制时可移动窗口。
- 录制时可暂停，也可以插入文本信息（仅支持英文）。
- 录制时可以使用全局快捷键（`Shift` + `空格`）暂停录制。
- 可调整最大帧率，以限制 CPU 使用率。
- 可设置标题帧。
- 可记录鼠标点击。
- 可显示录制用时。

### 注意

- 文件保存路径不可以有中文，否则可能无法保存。

## OnTopReplica - 画中画

一个应用程序窗口画中画工具，适用于 Windows Vista、Windows 7、 Windows 8 以及 10。

这个工具默认显示一个空白的置顶窗口，可以选择当前系统中的其他窗口，让它显示在其中。

对于监控后台进程、工作时查阅资料等情况非常实用。

GitHub: [LorenzCK / OnTopReplica](https://github.com/LorenzCK/OnTopReplica)

## PiP-Tool - 画中画

另一个应用程序窗口画中画工具，但功能比 OnTopReplica 少，只有简单的应用程序选择和区域裁剪功能。

GitHub: [LionelJouin / PiP-Tool](https://github.com/LionelJouin/PiP-Tool)

‍
