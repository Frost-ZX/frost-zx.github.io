---
title: 安装 elementary OS 后没有自动写入 EFI 引导
date: 2025-03-16T16:29:02Z
lastmod: 2025-03-16T16:29:48Z
tags: [记录,Linux,安装系统]
---

# 安装 elementary OS 后没有自动写入 EFI 引导

elementary OS 官网：[https://elementary.io/](https://elementary.io/)

安装版本：elementary OS 5.1

---

在很久之前用过 elementary OS，但是那时候感觉不太好用，后来删除了。

现在看更新了，而且正好有空的硬盘，然后就安装来试试。

但是，安装之后发现它没有向选择的 EFI 分区写入引导文件。

那时候以为是因为安装的时候没设置对，就再安装了一次，然而还是没有。

后来尝试使用 `boot-repair` 修复引导，但是没成功。

> 不知道是不是双硬盘安装导致的 BUG，后来发现引导文件写入到了第一块硬盘的 EFI 分区里。

最后看了深度科技论坛的一个帖子《[纯UEFI下安装15.7，结果没有写入efi](https://bbs.deepin.org/forum.php?mod=viewthread&tid=170729)》，按照 10 楼 @redchenjs 说的：

> 把原 `EFI` 文件夹里的 `ubuntu` 文件夹复制到空的 `EFI` 分区的 `efi` 文件夹内，然后在 `efi` 文件夹内创建 `boot` 文件夹，复制 `ubuntu` 文件夹里的 `shimx64.efi` 和 `grubx64.efi` 到创建的 `boot` 文件夹，最后把 `shimx64.efi` 重命名为 `bootx64.efi`。

这样就可以在 BIOS 启动菜单选第二块硬盘启动 elementary OS 了。

‍
