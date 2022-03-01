# 在 Linux / Windows 查询域名的 SRV 记录

## Linux（使用 dig 命令）

例如查询域名 `mc.frost-zx.top` 的用于 Minecraft 服务器的 SRV 记录：

```text
dig _minecraft._tcp.mc.frost-zx.top srv
```

## Windows（使用 NSLOOKUP 命令）

例如查询域名 `mc.frost-zx.top` 的用于 Minecraft 服务器的 SRV 记录：

方式一

```text
NSLOOKUP -type=SRV _minecraft._tcp.mc.frost-zx.top
```

方式二

```text
NSLOOKUP
set type=SRV
_minecraft._tcp.mc.frost-zx.top
```
