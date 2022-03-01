# Minecraft Java 版服务端启动参数选项

参考资料：[Minecraft Wiki - Tutorials / Setting up a server](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server)

在 Minecraft 服务端的启动命令 `-jar minecraft_server.jar` 的后面可以添加参数，传递给服务端：

- `--help`
  查看所有可用的参数。
- `--bonusChest`
  是否在初次生成世界时生成奖励箱。
- `--demo`
  指定服务端是否在演示模式下运行（给玩家显示一个“演示版”弹出信息，且在演示结束后玩家不能破坏、放置方块或者吃东西）。
- `--eraseCache`
  清除光照缓存等（与单人游戏进行“优化世界”操作时的“清除缓存”选项相同）。
- `--forceUpgrade`
  强制升级所有区块到服务端目前的版本（单人游戏世界也可用）。
  此选项会增加启动服务端所需的时间。
- `--initSettings`
  只初始化 `server.properties` 和 `eula.txt`，然后退出。
- `--jfrprofile`
  启动服务端时初始化 Java Flight Recorder。
  只在 Minecraft 1.18 及以上的版本可用。
- `--nogui`
  启动服务端不显示服务端内置的图形界面。
  添加该参数后，只能在系统的“命令提示符”或“终端”中控制服务端。
- `--port <Integer>`
  指定服务端监听的端口（默认值为 -1 ），忽略在 `server.properties` 中的设置。
- `--safeMode`
  安全模式，加载存档时只使用原版数据包。
- `--serverId <String>`
  给服务端指定一个 ID（似乎没有作用）。
- `--singleplayer <String>`
  使服务端以离线模式运行（参数值 `<String>` 的用途未知，可能是 Mojang 内部使用的）。
- `--universe <String>`
  指定查找存档文件夹所在的路径（默认为 `.`，即当前目录）。
- `--world <String>`
  指定 `level.dat` 所在文件夹的名称（存档文件夹名称）。
- `-o true`
  使服务端以在线模式运行，只有经过认证的用户才能进入（新版本中此选项不可用）。

示例命令行：

- `java -Xms256M -Xmx2G -jar minecraft_server.jar --forceUpgrade --nogui`
