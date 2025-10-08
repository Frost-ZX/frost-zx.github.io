---
title: Windows mklink 命令
date: 2025-03-15T22:29:09Z
lastmod: 2025-03-15T22:30:51Z
tags: [Windows,命令,命令提示符]
---

# Windows mklink 命令

## 参考

- [mklink | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/mklink)
- [Windows 中的 mklink 命令 | 始终](https://liam.page/2018/12/10/mklink-in-Windows/)

## 简介

该命令用于在 Windows 系统上创建对于文件或目录的符号链接，类似 Linux 上的 `ln` 命令，但两者的功能不完全相同。

该命令创建的链接与 “快捷方式” 功能创建的链接并不相同。

使用该命令创建链接时需要拥有管理员权限，否则无法创建，并提示 “你没有足够的权限执行此操作”。

## 命令语法

```plaintext
mklink [[/d] | [/h] | [/j]] link target

    /d      创建目录符号链接。
    /h      创建硬链接而非符号链接。
    /j      创建目录联接。
    link    指定要创建的符号链接的名称。
    target  指定新链接引用的路径（相对或绝对）。
```

默认情况下，该命令创建的是文件符号链接。

## 参数效果对比

|描述|不带参数|/D 参数|/H 参数|/J 参数|
| ------------------| ---------------| --------------------| ----------------| --------------------|
|中文名称|符号链接|符号链接|硬链接|联接|
|英文名称|Symbolic Link|Symbolic Link|Hard Link|Junction|
|作用对象|文件|目录|文件|目录|
|是否一定指向路径|否|否|否|是|
|dir 类型|SYMLINK|SYMLINK|无特殊显示|JUNCTION|
|资源管理器类型|.symlink|文件夹|无特殊显示|文件夹|
|资源管理器图标|快捷方式|文件夹快捷方式|无特殊显示|文件夹快捷方式|
|修改同步|是|是|是|是|
|删除同步|否|否|否|否|
|彻底删除源|删除源路径|删除源路径|删除所有硬链接|删除源路径|
|引用错误报错|无|引用了不可用的位置|-|引用了不可用的位置|

## 命令示例

### 将部分软件在 C 盘的数据转移到其他分区

例如

```bat
@REM 1. 将文件夹移动到新的路径（例如 D:\Minecraft\Main\.minecraft\）
@REM 2. 执行 `cd` 命令，切换工作目录
cd /d C:\Users\用户名\AppData\Roaming
@REM 3. 执行 `mklink /j` 命令，创建目录联接
mklink /j .minecraft D:\Minecraft\Main\.minecraft
```

‍
