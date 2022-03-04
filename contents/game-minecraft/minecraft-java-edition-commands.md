# Minecraft Java Edition 命令合集

参考资料：
[Minecraft Wiki - 命令](http://minecraft-zh.gamepedia.com/%E5%91%BD%E4%BB%A4)
已测试的游戏版本：
Minecraft Java 正式版 1.10.2、1.12.2 等

[hint type="info"]如无特殊情况，本文中的 `目标选择器` 均使用 `r=半径` 作为说明，可根据需要自行修改。[/hint]

[hint type="warning"]安全起见，最好先 `/testfor` 一下设定的 `目标选择器` 是否正确选择了所需要修改的 `实体`。[/hint]

## /entitydata

打开或关闭 `半径` 范围内的生物的 AI（已测试：1.10.2、1.12.2）

- 打开（默认状态）：`/entitydata @e[r=半径] {NoAI:0}`
- 关闭：`/entitydata @e[r=半径] {NoAI:1}`

更改 `半径` 范围内的 `自定义 NPC` 的 `玩家材质 ID` 为 `游戏 ID`（已测试：1.10.2）

```text
/entitydata @e[r=半径,type=customnpcs.CustomNpc] {SkinUsername:{Name:"游戏 ID"}}
```

使 `半径` 范围内的 `RailCraft 永动机车` 的旋转角度变为 `角度`

```text
已测试：1.10.2
/entitydata @e[r=半径,type=railcraft.locomotive_creative] {Rotation:[0:角度]}

已测试：1.12.2
/entitydata @e[r=半径,type=railcraft:locomotive_creative] {Rotation:[角度,0.0f]}

可用的“角度”：0.0f 90.0f 180.0f 270.0f
```

使 `半径` 范围内的 `RailCraft 永动机车` 锁定（私人模式）（已测试：1.10.2）

```text
/entitydata @e[r=半径,type=railcraft.locomotive_creative] {lock:"PRIVATE"}
```

使 `半径` 范围内的 `RailCraft 永动机车` 启动（已测试：1.10.2）

```text
/entitydata @e[r=半径,type=railcraft.locomotive_creative] {locoMode:2b}
```

使 `半径` 范围内的 `RailCraft 永动机车` 停止（已测试：1.10.2）

```text
/entitydata @e[r=半径,type=railcraft.locomotive_creative] {locoMode:0b}
```

使 `半径` 范围内的 `矿车` 内显示方块 ID 为 `ID:数据值` 的方块

```text
已测试：1.10.2
/entitydata @e[r=半径,type=Minecart] {CustomDisplayTile:1b,DisplayTile:"ID",DisplayData:数据值,DisplayOffset:方块垂直位移}

已测试：1.12.2
/entitydata @e[r=半径,type=minecart] {CustomDisplayTile:1b,DisplayTile:"ID",DisplayData:数据值,DisplayOffset:方块垂直位移}
```

使 `半径` 范围内的 `生物` 无敌（已测试：1.10.2）

```text
/entitydata @e[r=半径] {Invulnerable:1b}
```

使 `半径` 范围内的 `物品` 无法被捡起 & 消失

```text
已测试：1.10.2 Sponge 服务端
/entitydata @e[r=半径,type=Item] {ForgeData:{SpongeData:{InfiniteDespawnDelay:1b,InfinitePickupDelay:1b}},Invulnerable:1b}

已测试：1.12.2
/entitydata @e[r=半径,type=minecraft:item] {Age:-32768s,Health:100s,PickupDelay:32767s,UpdateBlocked:1b}
```

## /give

给予玩家一块告示牌，右键点击时可生成一个命令中使用了转义符的命令方块（已测试：1.12.2）

> 若直接在命令方块中使用转义符，不生效，因此需要借助告示牌。
> **可能会损坏存档（游戏崩溃），使用前请备份。**

```text
/give @p minecraft:sign 1 0 { BlockEntityTag: { Text1: "{ \"text\": \"生成命令方块\", \"clickEvent\": { \"action\": \"run_command\", \"value\": \"setblock ~ ~1 ~ minecraft:command_block 0 destroy { Command: \\\"换行符\\u000a换行符\\\" }\" } }", id: "Sign" } }
```

```text
/give @p minecraft:sign 1 0 { "BlockEntityTag": { "Text1": "{ \"text\": \"生成命令方块\", \"clickEvent\": { \"action\": \"run_command\", \"value\": \"setblock ~ ~1 ~ minecraft:command_block 0 destroy { \\\"Command\\\": \\\"换行符\\u000a换行符\\\" }\" } }", "id": "Sign" } }
```

## /summom

在 `原地` 生成半径为 `半径` ，时长为 `游戏刻` 的 `伤害 II` 的药水云（已测试：1.10.2）

```text
/summon AreaEffectCloud ~ ~ ~ {Age:0,Duration:游戏刻,ReapplicationDelay:20,WaitTime:20,DurationOnUse:0,Radius:半径f,RadiusPerTick:0.0001f,RadiusOnUse:0.0f,Particle:flame,Effects:[{Ambient:0b,Amplifier:1b,Id:7b,ShowParticles:1b,Duration:1}]}
```

在 `原地` 生成名称为 `ID` 且 `无敌` 的临时 NPC（已测试：1.10.2 Sponge 服务端）

```text
/summon Sponge.Human ~ ~ ~ {Invulnerable:1b,CustomName:"ID"}
```

在 `原地` 生成一辆内部显示方块 ID 为 `ID:数据值` 的方块的矿车

```text
已测试：1.10.2
/summon Minecart ~ ~ ~ {CustomDisplayTile:1b,DisplayTile:"ID",DisplayData:数据值,DisplayOffset:方块垂直位移}

已测试：1.12.2
/summon minecart ~ ~ ~ {CustomDisplayTile:1b,DisplayTile:"ID",DisplayData:数据值,DisplayOffset:方块垂直位移}
```

在 `原地` 生成方块 ID 为 `ID:数据值` 的浮空方块（已测试：1.12.2）

```text
/summon falling_block X Y Z {Block:"ID",Data:数据值b,Time:1,NoGravity:1b,UpdateBlocked:1b,CustomName:"名称"}
```

## /testfor

检测半径为 `半径` 的玩家手上是否 `持有` 相应 `物品 ID` 的物品（已测试：1.10.2）

```text
/testfor @a[r=半径] {SelectedItem:{id:物品 ID}}
```

> 检测的不一定是 `物品`，也可以是 `方块`、`装备` 等等。
> 也支持检测模组中的物品。
>
> 例：
> `/testfor @a[r=5] {SelectedItem:{id:minecraft:stone}}`
> `/testfor @a[r=16] {SelectedItem:{id:wheat_plus:MaiZiTong}}`
