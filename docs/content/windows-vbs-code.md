---
title: 「合集」VBS 代码
date: 2025-03-16T22:03:27Z
lastmod: 2025-03-16T22:06:33Z
tags: [合集,Windows,VBS,脚本,代码片段]
---

# 「合集」VBS 代码

## 激活窗口

```vbs
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")
WshShell.AppActivate "窗口标题"
```

---

## 模拟输入

```vbs
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")
WshShell.SendKeys "按键"
```

参考：[博客园](https://www.cnblogs.com/xhyang110/archive/2011/03/25/1995327.html)

**1. 基本键**

一般来说，要发送的按键都可以直接用该按键字符本身来表示：

> 发送字母 `X`，用 `WshShell.SendKeys "X"`。

也可直接发送多个按键指令，只需要将按键字符按顺序排列在一起即可：

> 发送按键 `Test`，用 `WshShell.SendKeys "Test"`。

**2. 特殊功能键**

对于需要与 `Shift`、`Ctrl`、`Alt` 三个控制键组合的按键，SendKeys 使用特殊字符来表示：

|按键|代码|
| :------| :----------------------|
|Shift|WshShell.SendKeys "+"|
|Ctrl|WshShell.SendKeys "^"|
|Alt|WshShell.SendKeys "%"|

> 注意：这样使用时，不需要使用 `大括号` 括起这些特殊字符。

由于 `+`、`^` 这些字符用来表示特殊的控制按键，所以如果要表示这些 `字符` 的按键，要用 `大括号` 括住这些字符：

> 发送加号 `+`，用 `WshShell.SendKeys "{+}"`。

对于一些不会生成字符的控制功能按键，也同样需要使用大括号括起来按键的名称。  
如果发送是基本字符用 `“”` 括起来：

> 发送 `回车键`，用 `WshShell.SendKeys "{ENTER}"`  
> 发送 `向下的方向键`，用 `WshShell.SendKeys "{DOWN}"`​

**3. 组合键**

发送 `Ctrl + Shift + ESC`，用 `WshShell.SendKeys "^+{ESC}"`。

**4. 发送多个重复的单字母按键**

不必重复输入该字母，SendKeys 允许使用简化格式进行描述。  
使用格式：`{按键 数字}`​

> 发送 10 个字母 `X`，用 `WshShell.SendKeys "{X 10}"`。

**5. 列表**

|按键|代码|
| :------------------| :----------------------------|
|↑（UP ARROW）|{UP}|
|↓（DOWN ARROW）|{DOWN}|
|←（LEFT ARROW）|{LEFT}|
|→（RIGHT ARROW）|{RIGHT}|
|BACKSPACE|{BACKSPACE} / {BS} / {BKSP}|
|BREAK|{BREAK}|
|CAPS LOCK|{CAPSLOCK}|
|DEL（Delete）|{Delete} / {DEL}|
|END|{END}|
|ENTER|{ENTER} / ~|
|ESC|{ESC}|
|HELP|{HELP}|
|HOME|{HOME}|
|INS（Insert）|{Insert} / {INS}|
|NUM LOCK|{NUMLOCK}|
|PAGE DOWN|{PGDN}|
|PAGE UP|{PGUP}|
|PRINT SCREEN|{PRTSC}|
|SCROLL LOCK|{SCROLLLOCK}|
|Space|​` `（空格）|
|TAB|{TAB}|
|F1|{F1}|
|F2|{F2}|
|F3|{F3}|
|F4|{F4}|
|F5|{F5}|
|F6|{F6}|
|F7|{F7}|
|F8|{F8}|
|F9|{F9}|
|F10|{F10}|

---

## 循环

```vbs
do
...
loop
```

---

## 语音合成（TTS）

```vbs
CreateObject("SAPI.SpVoice").Speak "内容"
```

---

## 暂停

```vbs
WScript.Sleep 毫秒
```

---

## 示例代码

### 模拟输入

#### 键盘灯闪烁

倒计时（时间到后闪烁 NumLock 5 次，间隔 0.2s）

```vbs
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")
m = InputBox("分")
s = InputBox("秒")
WScript.sleep m*6000+s*1000
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
WScript.sleep 200
WshShell.SendKeys "{NUMLOCK}"
```

循环闪烁（NumLock，间隔 1s）

```vbs
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")
do
WshShell.SendKeys "{NUMLOCK}"
WScript.Sleep 1000
loop
```

循环闪烁（NumLock，自定义间隔）

```vbs
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")
t = InputBox("请输入闪烁间隔(毫秒)")
do
WshShell.SendKeys "{NUMLOCK}"
WScript.Sleep t
loop
```

循环闪烁（3 灯轮换，间隔 0.5s）

```vbs
Dim WshShell
Set WshShell = CreateObject("WScript.Shell")
WshShell.SendKeys "{NUMLOCK}"
WScript.Sleep 500
WshShell.SendKeys "{NUMLOCK}"
WScript.Sleep 500
do
WshShell.SendKeys "{NUMLOCK}"
WshShell.SendKeys "{CAPSLOCK}"
WScript.Sleep 500
WshShell.SendKeys "{CAPSLOCK}"
WshShell.SendKeys "{SCROLLLOCK}"
WScript.Sleep 500
WshShell.SendKeys "{SCROLLLOCK}"
WshShell.SendKeys "{NUMLOCK}"
WScript.Sleep 500
loop
```

### 提示框

#### 简易，有输入框

```vbs
Dim i, msg
msg = "请输入内容："
i = InputBox(msg)
Msgbox i
```

### 音乐播放器

#### 简易，有输入框

```vbs
Set Player = CreateObject("WMPlayer.OCX")
song = InputBox("请输入歌曲路径" & vbCrLf & "", "简易音乐播放器 [等待中]")
if song <>"" then
do
Player.url = song
song = InputBox(song & vbCrLf & "", "简易音乐播放器 [正在播放]", song)
if song = "" then exit do
loop
end if
Set Player = nothing
```

### 语音合成

#### 有输入框

```vbs
Set s = CreateObject("SAPI.SpVoice")
i = InputBox("请输入内容" & vbCrLf & "", "语音合成 [等待中]")
s.speak i
```

‍
