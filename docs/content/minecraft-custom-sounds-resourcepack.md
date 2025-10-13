---
title: "「Minecraft」自定义声音资源包"
date: 2025-03-16T17:43:19Z
lastmod: 2025-03-16T17:46:51Z
tags: [Minecraft,教程,资源包]
---

# 「Minecraft」自定义声音资源包

## 参考资料

- [Minecraft Wiki - playsound 命令](https://minecraft-zh.gamepedia.com/命令/playsound)
- [Minecraft Wiki - sounds.json](https://minecraft-zh.gamepedia.com/Sounds.json)
- [Minecraft Wiki - 命名空间ID](https://minecraft-zh.gamepedia.com/命名空间ID)

## 教程简介

- 在资源包中加入自定义的音频文件，并使用 `playsound` 命令进行播放。
- 本教程主要面向 Java 版 Minecraft。

---

## 教程正文

### 示例资源包文件结构

> 使用默认的命名空间：`minecraft`，可根据需要修改。

```text
[ ] 为文件夹

-- [assets]
---- [minecraft]
------ [sounds]
-------- sound_a.ogg
-------- sound_b.ogg
------ sounds.json
-- pack.mcmeta
-- pack.png
```

### sounds.json 解析

> 注意：仅包含部分项目。

#### 示例文件

> 可在原基础上添加更多项，编辑文件时需要注意 `JSON` 格式。

```json
{
    "custom.sound.a": {
        "replace": false,
        "subtitle": "字幕",
        "sounds": [
            {
                "name": "sound_a",
                "volume": 1.0,
                "pitch": 1.0,
                "stream": false,
                "preload": true,
                "type": "sound"
            }
        ]
    },
    "custom.sound.b": {
        "sounds": [
            {
                "name": "sound_b",
                "stream": true
            }
        ]
    },
    "custom.sound.ab": {
        "sounds": [
            {
                "name": "sound_a",
                "weight": 1,
                "stream": false
            },
            {
                "name": "sound_b",
                "weight": 1,
                "stream": true
            }
        ]
    }
}
```

#### 声音事件名

- custom.sound.a、custom.sound.b、custom.sound.ab（可根据需要修改）
- 通常按照类别以点 `.` 分隔
- 对应 `playsound`​ 命令中的 `声音`

#### replace

- 可选，默认为 `false`
- 设定为 true，在 `sounds` 项中定义的音效列表会替换优先级较低的资源包的相同命名空间中与该声音事件名相同的声音。
- 设定为 false，则补充到已有的音效列表中，而不是替换。

#### subtitle

- 可选，字符串
- 若在游戏选项中开启了 `显示字幕`，游戏会在该声音事件被触发时将该字符串以声音字幕的的形式显示。

#### sounds

- 该声音事件使用的音频文件列表
- 当该声音事件被触发时，若列表中存在多个项目（类似 `custom.sound.ab`​ 中的 `sounds` 项），游戏会从此列表定义的音频文件中随机选取一个播放。

#### name

- 从资源包 `assets/<命名空间>/sounds/` 文件夹到此音频文件的相对路径（不带扩展名）
- 可填写另一个已存在的声音事件名（受 `type` 项影响）
- 音频文件格式必须为 `OGG`
- 若音频文件路径为 `assets/minecraft/sounds/custom/sound/a.ogg`​，则为 `custom/sound/a`。
- 若音频文件路径为 `assets/custom/sounds/sound_a.ogg`​，则为 `example:sound_a`。

#### volume

- 可选，默认为 `1.0`
- 此声音播放时的音量
- 值为 0.0 到 1.0 的小数
- 如非必要，可仅在 `playsound` 命令中设定。

#### pitch

- 可选，默认为 `1.0`
- 此声音播放时的音调
- 如非必要，可仅在 `playsound` 命令中设定。

#### weight

- 可选，默认为 `1`
- 此声音事件触发时此声音被播放的概率（权重）。
- 一般用于 `sounds` 项中存在多个项目时。

#### stream

- 可选，默认为 `false`
- 设置为 true，此声音会以流式播放。
- 当声音时长较长时，最好设为 true 以避免卡顿。
- 所有的 `music`​ 和 `record` 类型的音效（除了音符盒）都使用流式播放（它们的时长都达到1分多钟）。

#### preload

- 可选，默认为 `false`
- 设置为 true，则该音频文件会在加载资源包时被加载，而不是在播放音效时再被加载。

#### type

- 可选，默认为 `sound`
- 可填写 `sound`​ 或 `event`
- sound：表明 `name` 项中定义的是文件名
- event：表明 `name` 项中定义的是声音事件名

### 使用 playsound 命令播放设定的声音

#### playsound 命令语法

>  **&lt; &gt;**  必填，  **[ ]**  可选

```text
playsound <声音> <来源> <玩家> [x] [y] [z] [音量] [音调] [最小音量]
```

#### playsound 命令参数解析

- 声音

  - 指定要播放的声音
  - 在 `sounds.json` 中定义的一个声音事件
  - 若命名空间不为默认的 `minecraft`​，则需要在前方包含命名空间（例如：`example:`）。
  - 例如：`custom.sound.a`​、`example:sound.a`
- 来源‌‌

  - 设定播放的声音所属的类型，对应游戏选项中的 `音乐和声音` 的分类。
  - 可填写：`master, music, record, weather, block, hostile, neutral, player, ambient, voice`
  - 一般为 `master`
- 玩家

  - 设定播放声音的目标（仅设定的目标可听到该声音）
  - 填写 `玩家ID`​ 或 `目标选择器`
  - 例如：`Frost_ZX`​、`@a[x=0,y=80,z=0,r=16]`
- x y z

  - 发出声音的位置
  - 可用波浪号 `~` 来指定一个相对于命令执行者（玩家、命令方块）的位置
  - 例如：`0 85 0`​、`~5 ~ ~-5`
- 音量

  - 设定声音能被听见的距离
  - 最小值为 `0.0`
  - 设定小于 `1.0`​ 的值，声音的音量较低，可听到该声音的范围（中心坐标为 `x y z` 的球状）会较小。
  - 设定大于 `1.0`​ 的值，声音的音量不会增大（保持 `1.0`​），但可听到该声音的范围（`16`）会与音量相乘。
  - 音量设定为 `1.0`​ 时，可听到该声音的范围为：中心坐标为 `x y z`​，半径为 `16` 方块的球状范围。
  - 声音总会基于目标与球体中心（`x y z`​）的距离逐渐衰减至无声（即使对方在 `目标` 范围内，也有可能听不到该声音）。
- 音调

  - 设定声音播放时的音调。
  - 数值在 `0.0`​ 至 `2.0`​ 之间（含 `0.0`​ 和 `2.0`）
  - 小于 `0.5`​ 的值与 `0.5` 等价（效果相同）
  - 小于 `1.0` 的值会降低音调，增加持续时间。
  - 大于 `1.0` 的值会提升音调，减小持续时间。
- 最小音量

  - 设定在可听到该声音的范围外的目标能听到该声音的音量
  - 数值在 `0.0`​ 至 `1.0`​ 之间（含 `0.0`​ 和 `1.0`）

#### playsound 命令示例

```text
# 在命令方块所在的位置，向玩家 Frost_ZX 播放声音 custom.sound.a
playsound custom.sound.a master Frost_ZX ~ ~ ~

# 在命令方块所在的位置的上方 20 格处，向全部玩家播放声音 custom.sound.b
# （音量从 ~ ~20 ~ 处开始，随着目标玩家的移动，在半径 160 格方块内衰减）
playsound custom.sound.b master @a ~ ~20 ~ 10

# 在命令方块所在的位置，向位于命令方块 16 格范围内的全部玩家
# 播放位于命名空间 example 的声音 custom.sound.a
playsound example:custom.sound.a master @a[r=16] ~ ~ ~

# 在命令方块所在的位置，向位于中心坐标为 0 80 0，半径 20 格范围内的全部玩家
# 播放位于命名空间 example 的声音 custom.sound.a
# （音量从命令方块所在的位置开始，随着目标玩家的移动，在半径 1600 格方块内衰减）
playsound example:custom.sound.a master @a[x=0,y=80,z=0,r=20] ~ ~ ~ 100
```

### 示例资源包文件

- [默认命名空间（Minecraft 1.12.2）](https://c.frost-zx.top/data/static/archive/MinecraftSoundsDemoDefaultNamespace-1.12.2.zip)
- [自定义命名空间（Minecraft 1.12.2）](https://c.frost-zx.top/data/static/archive/MinecraftSoundsDemoCustomNamespace-1.12.2.zip)

‍
