---
title: "修改 Windows 远程桌面端口以及开启 60FPS"
date: 2025-03-16T19:08:57Z
lastmod: 2025-03-16T19:12:48Z
tags: [Windows,教程,远程桌面]
---

# 修改 Windows 远程桌面端口以及开启 60FPS

## 参考资料

- [百度经验](https://jingyan.baidu.com/article/ce43664928d5293773afd39b.html)
- [Microsoft 支持](https://support.microsoft.com/en-us/help/2885213/frame-rate-is-limited-to-30-fps-in-windows-8-and-windows-server-2012-r)

## 修改远程桌面端口

> **请仔细按照本说明中的步骤操作。如果错误地修改了注册表，可能会导致系统出现严重问题。**
>
> 已测试：Windows 7、Windows 8、Windows 10、Windows Server 2012、Windows Server 2016

#### 用到的工具

- Windows 注册表编辑器（regedit.exe）

#### 步骤

1. 启动 `注册表编辑器`。

    > 打开 `运行`​ —— 输入 `regedit`​ —— 点击 `确定`
    >
2. 找到并 `点击` 以下注册表子项。

    ```text
    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\Wds\rdpwd\Tds\tcp
    ```
3. ​`鼠标右键`​ 点击 `PortNumber`​，然后点击 `修改`。
4. ​`选中`​ 弹出来的对话框中的 `十进制`​，把 `数值数据`​ 输入框中的 `数字`​（默认是 3389）改为 `新的端口号`​（不能与已使用的端口相同），然后点击 `确定`。
5. 找到并 `点击` 以下注册表子项：

    ```text
    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp
    ```
6. ​`鼠标右键`​ 点击 `PortNumber`​，然后点击 `修改`。
7. ​`选中`​ 弹出来的对话框中的 `十进制`​，把 `数值数据`​ 输入框中的 `数字`​（默认是 3389）改为 `想要的端口号`​，然后点击 `确定`。
8. 关闭 `注册表编辑器`​，然后 `重新启动` 系统，以应用设定。

---

## 开启 60FPS

> **请仔细按照本说明中的步骤操作。如果错误地修改了注册表，可能会导致系统出现严重问题。**
>
> 已测试：Windows 8、Windows 10、Windows Server 2012、Windows Server 2016

#### 用到的工具

- Windows 注册表编辑器（regedit.exe）

#### 步骤

1. 启动 `注册表编辑器`。

    > 打开 `运行`​ —— 输入 `regedit`​ —— 点击 `确定`
    >
2. 找到并 `点击` 以下注册表子项：

    ```text
    HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations
    ```
3. 在 `编辑`​ 菜单上，点击 `新建`​，然后点击 `DWORD（32-bit）值`。
4. 输入 `DWMFRAMEINTERVAL`​，然后按 `Enter` 键。
5. ​`鼠标右键`​ 点击 `DWMFRAMEINTERVAL`​，然后点击 `修改`。
6. ​`选中`​ 弹出来的对话框中的 `十进制`​，在 `数值数据`​ 输入框中，输入 `16`​，然后点击 `确定`。

    > **注意**
    >
    > 仅修改了远程桌面会话允许传输并显示的最大帧率，在远程桌面会话中的实际帧率取决于其他因素。
    >
    > 并非所有的远程显示协议都支持大于 30 FPS。
    >
    > 此注册表项也可以用于限制远程桌面的帧率。
    >
    > 数值计算方式：`1000 / 最大 FPS`（数值越小，FPS 越高）
    >
7. 关闭 `注册表编辑器`，然后重新连接远程桌面或重新启动系统，以应用设定。

‍
