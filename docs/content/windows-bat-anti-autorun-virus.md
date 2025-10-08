---
title: 「BAT工具」防止病毒在打开U盘时自动运行
date: 2025-03-16T21:39:48Z
lastmod: 2025-03-16T21:41:56Z
tags: [Windows,代码片段,BAT,工具,脚本]
---

# 「BAT工具」防止病毒在打开U盘时自动运行

参考资料：[百度百科](https://baike.baidu.com/item/autorun.inf/10548193)

注意事项：运行前可能需要关闭杀毒软件（例如 360），以免误报。

---

## 方法一（手动创建文件）

### 步骤

1. 新建一个空白的 `文本文档`。
2. 写入以下内容：

    ```bat
    @echo off
    title 防止病毒在打开U盘时自动运行
    :choose
    echo 请选择需要进行的操作:
    echo 1. 启用(不能自动运行)
    echo 2. 停用(能自动运行)
    echo 3. 退出
    echo;
    set /p choose=选择:
    if /i '%choose%'=='1' goto job_1
    if /i '%choose%'=='2' goto job_2
    if /i '%choose%'=='3' goto end
    cls && echo 选择有误，请重新输入 && echo; && goto choose
    :job_1
    echo;
    echo 第一步: 删除已存在的 AUTORUN.INF 文件(若有)
    del /F /Q AUTORUN.INF
    del /F /Q /A:H AUTORUN.INF
    del /F /Q /A:R AUTORUN.INF
    del /F /Q /A:S AUTORUN.INF
    echo 第二步: 创建 AUTORUN.INF 文件夹
    md AUTORUN.INF
    echo 第三步: 进入 AUTORUN.INF 文件夹并创建 CON\ 文件夹
    cd AUTORUN.INF && md CON\ && cd ..
    echo; && echo 操作已结束
    goto end
    :job_2
    echo;
    echo 第一步: 进入 AUTORUN.INF 文件夹
    cd AUTORUN.INF
    echo 第二步: 删除 CON\ 文件夹
    rd CON\
    echo 第三步: 返回上一级文件夹并删除 AUTORUN.INF 文件夹
    cd .. && rd AUTORUN.INF
    echo; && echo 操作已结束
    goto end
    :end
    echo;
    pause
    exit
    ```
3. 把它重命名为 `AntiAutorun.bat`（`文件名` 可以不一样，但 `扩展名` 必须为 `.bat`）。
4. 把文件放到U盘 `根目录` 下，运行，根据提示操作（保留文件，可多次使用）。

---

## 方法二（直接下载文件）

### 步骤

1. 下载此 BAT 脚本文件（[AntiAutorun.bat](https://c.frost-zx.top/data/static/script/AntiAutorun.bat)）。
2. 把文件放到U盘 `根目录` 下，运行，根据提示操作（保留文件，可多次使用）。

‍
