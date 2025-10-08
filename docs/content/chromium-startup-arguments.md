---
title: Chromium 内核浏览器命令行启动参数
date: 2025-03-19T11:37:29Z
lastmod: 2025-03-19T11:40:14Z
tags: [Chrome,Chromium,Windows]
---

# Chromium 内核浏览器命令行启动参数

允许加载过期的插件

```
--allow-outdated-plugins
```

---

允许 HTTPS 网站加载从 HTTP 链接引用的 CSS、JavaScript 等资源

```
--allow-running-insecure-content
```

---

允许拓展脚本在官方应用中心生效

```
--allow-scripting-gallery
```

备注：默认情况下，这些脚本被阻止

---

停用 GPU 加速视频

```
--disable-accelerated-video
```

---

停用 Dart

```
--disable-dart
```

---

禁用桌面通知

```
--disable-desktop-notifications
```

备注：在 Windows 中，默认启用桌面通知

---

禁用拓展

```
--disable-extensions
```

---

停用 FileSystem API

```
--disable-file-system
```

---

禁止显示图像

```
–disable-images
```

---

禁用 Java

```
--disable-java
```

---

禁用 JavaScript

```
--disable-javascript
```

---

禁用插件

```
--disable-plugins
```

---

禁用弹出拦截

```
--disable-popup-blocking
```

---

停用 TCP/IP 预连接

```
--disable-preconnect
```

---

关闭远程字体支持

```
--disable-remote-fonts
```

备注：SVG 中的字体不受此参数影响

---

停用语音输入

```
--disable-speech-input
```

---

不遵守同源策略

```
--disable-web-security
```

---

将缓存文件放置在设定的文件夹中

```
--disk-cache-dir
```

---

设置缓存大小上限

```
--disk-cache-size
```

备注：以字节为单位

---

停用 DNS 预读

```
--dns-prefetch-disable
```

---

启用打印预览

```
--enable-print-preview
```

---

调整标签存放在左边，非顶部

```
--enable-vertical-tabs
```

---

设定拓展自动更新频率

```
--extensions-update-frequency
```

备注：以秒为单位

---

插件不启用单独进程

```
--in-process-plugins
```

---

让浏览器直接以隐身模式启动

```
--incognito
```

---

最后一个标签关闭后仍保持浏览器进程

```
--keep-alive-for-test
```

备注：某种意义上可以提高热启动速度，不过系统最好得有充足的内存

---

启用 kiosk 模式

```
--kiosk
```

备注：一种类似于全屏的浏览模式

---

使用指定的语言

```
--lang
```

---

阻止 HTTPS 页面加载通过 HTTP 链接引用的图片/字体/框架

```
--no-displaying-insecure-content
```

---

跳过 Chromium 首次运行检查

```
--no-first-run
```

---

不发送 HTTP-Referer 头

```
--no-referrers
```

---

彻底停用沙箱

```
--no-sandbox
```

---

启动时不建立窗口

```
--no-startup-window
```

---

将网址列弹出的提示选单数量改为 number 个

```
--omnibox-popup-count=”number”
```

---

每个标签页使用单独进程

```
--process-per-tab
```

---

每个站点使用单独进程

```
--process-per-site
```

---

使用给定 URL 的 PAC 代理脚本

```
--proxy-pac-url
```

备注：可以使用本地文件，例如 --proxy-pac-url="file:///C:/proxy.pac"

---

使用给定的代理服务器，这个参数只对 HTTP 和 HTTPS 有效

```
--proxy-server
```

备注：例如 --proxy-server=127.0.0.1:8082

---

在 Chrome 的任务管理器中增加内存清理功能

```
--purge-memory-button
```

---

设置远程调试端口

```
--remote-debugging-port
```

备注：例如 --remote-debugging-port=9222

---

以单进程模式运行浏览器

```
--single-process
```

备注：启动时浏览器会给出不安全警告

---

启动时最大化

```
--start-maximized
```

---

自定义 User-Agent

```
--user-agent
```

---

自定义用户资料夹

```
--user-data-dir=UserDataDir
```

备注：例如 –user-data-dir="D:\Temp\Chrome\UserData"

‍
