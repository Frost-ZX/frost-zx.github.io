---
title: 「Minecraft」自动修复部分由异常实体或异常方块实体导致的崩溃
date: 2025-03-16T19:20:29Z
lastmod: 2025-03-16T19:22:00Z
tags: [Minecraft,Forge,教程]
---

# 「Minecraft」自动修复部分由异常实体或异常方块实体导致的崩溃

需要安装 `Forge API`；可在 `客户端` 和 `服务端` 中使用；对于部分崩溃有效，例如 `Ticking block entity`。

已测试游戏版本：

Minecraft Java Edition 正式版 1.7.X 1.8.X 1.9.X 1.10.X 1.11.X 1.12.X

---

## 主要用到的文件

### 客户端

```plaintext
客户端/.minecraft/config/forge.cfg
```

### 服务端

```plaintext
服务端/config/forge.cfg
```

## 方法

修改

```plaintext
B:removeErroringEntities=false
```

变为

```plaintext
B:removeErroringEntities=true
```

修改

```plaintext
B:removeErroringTileEntities=false
```

变为

```plaintext
B:removeErroringTileEntities=true
```

## 解释

#### removeErroringEntities

**把此项设置为** **​`true`​**​ **，可以自动移除发生异常的实体，而不是崩溃。**

Set this to true to remove any Entity that throws an error in its update method instead of closing the server and reporting a crash log.

**注意，把此项设置为** **​`true`​** **前，请备份存档，以免丢失数据。**

BE WARNED THIS COULD SCREW UP EVERYTHING USE SPARINGLY WE ARE NOT RESPONSIBLE FOR DAMAGES.

#### removeErroringTileEntities

**把此项设置为** **​`true`​**  **，可以自动移除发生异常的方块实体，而不是崩溃。**

Set this to true to remove any TileEntity that throws an error in its update method instead of closing the server and reporting a crash log.

**注意，把此项设置为** **​`true`​** **前，请备份存档，以免丢失数据。**

BE WARNED THIS COULD SCREW UP EVERYTHING USE SPARINGLY WE ARE NOT RESPONSIBLE FOR DAMAGES.

‍
