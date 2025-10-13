---
title: "PlotSquared 创建 Minecraft 默认地形的地皮世界"
date: 2025-03-16T18:28:32Z
lastmod: 2025-03-16T18:30:18Z
tags: [插件,Minecraft,PlotSquared]
---

# PlotSquared 创建 Minecraft 默认地形的地皮世界

服务端平台：Sponge 1.12.2 7.1.6

PlotSquared 插件版本: v3.5.0-SNAPSHOT

---

## 步骤

#### 1. 执行 `安装` 命令（查看命令提示）

```text
/p setup
```

#### 2. 选择生成器（默认）

```text
/p setup PlotSquared
```

#### 3. 选择世界类型（增强）

```text
/p setup AUGMENTED
```

#### 4. 选择地形（全部）

```text
/p setup ALL
```

#### 5. 根据需要配置地皮（大小、路宽等……）

- 5.1 地皮高度
- 5.2 地皮大小
- 5.3 地皮内部的方块（由于选择了 `ALL` 地形，无效果）
- 5.4 地皮地面的方块（由于选择了 `ALL` 地形，无效果）
- 5.5 地皮围墙顶部的方块（由于选择了 `ALL` 地形，无效果）
- 5.6 地皮（已被领取）围墙顶部的方块（由于选择了 `ALL` 地形，无效果）
- 5.7 地皮路的宽度
- 5.8 地皮路面的高度
- 5.9 地皮路面的方块
- 5.10 地皮围墙的方块
- 5.11 地皮围墙的高度
- 5.12 是否在世界最低层生成 `基岩`

#### 6. 世界的名称（建议仅使用 `英文字母`​、`数字`​、`下划线`）

## 提示

若在安装过程中输入了错误的参数，可通过 `/p setup cancel`​ 取消 `安装` 并重新开始。

正常安装结束后，在配置文件 `plotsquared/config/worlds.yml` 中会存在以下内容：

```
generator:
  type: 1
  terrain: 3
  plugin: PlotSquared
```

正常安装结束后，在配置文件 `config/sponge/worlds/minecraft/overworld/世界名/world.conf` 中不会存在以下内容：

```
# World Generation Modifiers to apply to the world
world-generation-modifiers=[
    PlotSquared
]
```

安装结束后，在对应的世界中输入 `/p i`​、`/p claim`​ 等命令，可能会提示 `不在地皮世界中`，此时需要重启服务端。

‍
