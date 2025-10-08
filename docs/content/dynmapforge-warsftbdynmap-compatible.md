---
title: 「Minecraft」修改 Dynmap 让 WarsFtbDynmap 能正常使用
date: 2025-03-16T18:58:37Z
lastmod: 2025-03-16T19:02:34Z
tags: [Minecraft,模组,代码片段,Dynmap]
---

# 「Minecraft」修改 Dynmap 让 WarsFtbDynmap 能正常使用

修改 Dynmap Forge 的 `index.html` 和 `markers.js` 让 WarsFtbDynmap 能正常使用。记录下来，方便下次使用。

版本信息：

- Minecraft Java Edition 正式版 1.12.2 Forge
- [DynmapForge](https://minecraft.curseforge.com/projects/dynmapforge) V3.0 beta 3
- [WarsFtbDynmap](https://minecraft.curseforge.com/projects/warsftbdynmap) V1.0.4

---

## 前言

可能是因为服务端的多世界功能是使用模组 [Just Enough Dimensions](https://minecraft.curseforge.com/projects/just-enough-dimensions) 实现的，然后 `WarsFtbDynmap` 不能正确识别世界，导致其生成的`marker.json`文件的文件名为 `marker_.json` ，而不是 `marker_世界名称.json`（或者直接把`标记点`的数据写入到原有的 `marker_世界名.json` 中）。

因为`DynmapForge`只能加载对应世界名称的 `marker.json` 文件，所以 `WarsFtbDynmap` 不能正常使用（不显示 [FTB Utilities](https://minecraft.curseforge.com/projects/ftb-utilities) 设定的领地）。

这只是临时解决方案，且本方案可能有可以改进的地方。

目前`网页地图`只显示世界 `world` 和世界 `DIM0`（这两个世界名称是 `Just Enough Dimensions` 给的；`world` 是默认的主世界，`DIM0` 是自己加的世界）。

## 进行的修改

#### dynmap/web/js/markers.js

删除了第 28 行中的`world`，使在`网页地图`中切换世界时不能自动传入要加载的`marker.json`的文件名中的`world`参数。

```diff
- function loadmarkers(world) {
+ function loadmarkers() {
```

#### dynmap/web/index.html

> 因为去掉了“传入参数”，加载 `marker.json` 时会出错，所以要写一个用于手动传入参数的东西。

在第 38 行的后面插入 1 行，写入以下内容（用于设定初始加载的 `marker.json` 的世界名称为 `DIM0`）：

```html
<script type="text/javascript">world = "DIM0";</script>
```

在第 46 行的后面插入 11 行，写入以下内容（切换世界用的 function）：

```html
<script type="text/javascript">
    function loadMarkersDefault() {
        world = "world";
    }
    function loadMarkersDIM0() {
        world = "DIM0";
    }
    function loadMarkersFTB() {
        world = "";
    }
</script>
```

#### dynmap/configuration.txt

> 修改 `DynmapForge` 的配置文件，添加用于切换要加载的 `marker.json` 的按钮。

在第 178 行左右（内容是 `# Note: more than one logo component can be defined`）的后面插入 18 行，写入以下内容：

```yaml
- class: org.dynmap.ClientComponent
  type: logo
  text: "加载标记 - FTB"
  logourl: "images/block_biome.png"
  linkurl: "javascript:loadMarkersFTB();"
  position: bottom-left
- class: org.dynmap.ClientComponent
  type: logo
  text: "加载标记 - 主世界"
  logourl: "images/block_biome.png"
  linkurl: "javascript:loadMarkersDIM0();"
  position: bottom-left
- class: org.dynmap.ClientComponent
  type: logo
  text: "加载标记 - 默认"
  logourl: "images/block_biome.png"
  linkurl: "javascript:loadMarkersDefault();"
  position: bottom-left
```

## 结果

网页地图的左下角多了 3 个图标，依次是：

- 加载标记 - 默认
- 加载标记 - 主世界
- 加载标记 - FTB

点一下图标，然后再在右侧的侧边栏切换一下世界，就可以切换显示相应的标记了。（本来想点一下图标就能完成切换，但是暂时没有找到方法）。

‍
