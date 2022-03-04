# 「合集」Windows BAT / CMD 常用命令

收集整理，自用。

## @

### @ECHO

#### 打开命令输出

```bat
@ECHO ON
```

#### 关闭命令输出

```bat
@ECHO ON
```

### @REM

#### 注释

```bat
@REM 注释内容
```

## I

### IF

```bat
IF 条件 (
  执行命令
) ^
ELSE IF 条件 (
  执行命令
) ^
ELSE (
  执行命令
)
```

```bat
IF NOT 条件 (
  执行命令
)
```

```bat
@REM 建议判断变量时添加引号，防止出现未知问题。
@REM 下列判断结果均为真

SET EXAMPLE_VAR=1

IF "%EXAMPLE_VAR%" == "1" (
  SET EXAMPLE_VAR=2
)

IF NOT "%EXAMPLE_VAR%" == "1" (
  SET EXAMPLE_VAR=1
)
```

## P

### ping

#### Ping 指定的主机指定次数

```bat
ping -n 次数 主机名
```

#### Ping 指定的主机，直到停止

> 按下 `Ctrl + Break` 查看统计信息并继续操作；
> 按下 `Ctrl + C` 以停止。

```bat
ping -t 主机名
```

#### Ping 指定的主机 10 次，并指定等待每次回复的超时时间（毫秒）

```bat
ping -n 10 -w 超时时间 主机名
```

## S

### SET

#### 设置环境变量

> 注：等号之间不能添加空格

```bat
SET 环境变量名=环境变量值
```

```bat
@REM 把用户输入的内容作为变量值
SET /P 环境变量名="提示内容"
```

### START

#### 启动 cmd.exe 并执行命令

```bat
@REM 命令执行完毕后自动关闭
START "窗口标题" /C 起始目录 cmd.exe /C "命令内容"

@REM 命令执行完毕后不自动关闭
START "窗口标题" /D 起始目录 cmd.exe /C "命令内容"
```

## T

### TASKKILL

#### 结束指定窗口标题的程序及其子进程

```bat
TASKKILL /FI "WINDOWTITLE eq 窗口标题" /F /T
```

### TIMEOUT

#### 等待指定秒数（可通过任意按键中断）

```bat
TIMEOUT /T 秒数
```

#### 等待指定秒数（不可通过按键中断）

```bat
TIMEOUT /T 秒数 /NOBREAK
```

#### 无限期等待按键

```bat
TIMEOUT /T -1
```

### tracert

- 不将地址解析为主机名（-d）
- 搜索目标的最大跃点数 20（-h）
- 等待每个回复的超时时间 5000 毫秒（-w）
- 强制使用 IPv4（-4）
- 强制使用 IPv6（-6）

```bat
tracert -d -h 20 -w 5000 -4 目标
tracert -d -h 20 -w 5000 -6 目标
```
