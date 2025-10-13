---
title: "Windows 10 设置独立显卡运行 Minecraft"
date: 2025-03-16T16:01:49Z
lastmod: 2025-03-16T16:02:22Z
tags: [Minecraft,Windows,Java,配置]
---

# Windows 10 设置独立显卡运行 Minecraft

## 操作步骤

1. 打开“Windows 设置”，点击“系统”。  
    ​![截图](assets/network-asset-01-20250316163935-rkvoa6y.png "截图")
2. 点击“显示”选项卡下方的“图形设置”。  
    ​![截图](assets/network-asset-02-20250316163935-pjkkzbs.png "截图")
3. 在“选择要设置首选项的应用”中选择“桌面应用”（一般情况下，默认为该选项），然后点击“浏览”，将 `java.exe`​ 和 `javaw.exe`​ 添加进来。  
    ​![截图](assets/network-asset-03-20250316163935-pc8y963.png "截图")  
    ​`java.exe`​ 和 `javaw.exe`​ 在 Java 安装路径的 `bin` 文件夹中。  
    默认的 Java 安装路径的父路径为：

    ```text
    C:\Program Files\Java\
    C:\Program Files (x86)\Java\
    ```
4. 点击每一项中的“选项”，打开对应的“图形首选项”对话框。  
    ​![截图](assets/network-asset-04-20250316163936-tfcpoky.png "截图")
5. 在对话框中选择“性能”（一般情况下，该选项对应独立显卡，实际可参考下方的文本），然后点击“保存”。  
    ​![截图](assets/network-asset-05-20250316163936-c1g0etk.png "截图")

‍
