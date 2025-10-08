---
title: 「合集」Linux 常用命令
date: 2025-03-16T19:25:02Z
lastmod: 2025-03-16T19:28:22Z
tags: [合集,Linux,命令]
---

# 「合集」Linux 常用命令

收集整理，自用。

---

# I

## init

重启：`init 6`​

---

# J

## journalctl

配置自动维护日志文件大小

只保留近两周的日志：`journalctl --vacuum-time=2w`​

只保留 256MB 的日志：`journalctl --vacuum-size=256M`​

参考：[Linux 系统 /var/log/journal/ 垃圾日志清理](https://cloud.tencent.com/developer/article/1446278)

---

# P

## pkill（强制踢掉登录的用户）

### 查看用户

Linux 系统 root 用户可强制踢制其它登录用户，非 root 用户只能踢掉当前用户名的用户。用 `w` 命令可以查看登录的用户的信息。

### 踢掉用户

命令格式：

```bash
pkill -kill -t <tty>
```

说明：

​`<tty>` 为要踢的用户的 tty，例如 `pkill -kill -t pts/1`。

---

# S

## screen

### 命令

#### 列出当前所有的 session

```bash
screen -ls
```

#### 创建名称为 `name` 的 session

```bash
screen -S name
```

#### 回到名称为 `name` 的 session

```bash
screen -r name
```

#### detach 名称为 `name` 的 session

```bash
screen -d name
```

#### 结束当前 session 并回到名称为 `name` 的 session

```bash
screen -r -d name
```

### 按键

在每个 screen session 下，所有命令都以 `Ctrl + A`（C-A）开始

|按键|作用|
| :------| :------------------------------------------------------|
|C-A ?|显示所有键绑定信息|
|C-A X|锁定当前的 screen session，需用用户密码解锁|
|C-A D|detach，暂时断开当前的 screen session，用 `screen` 命令回去|
|C-A Z|把当前的 screen session 放到后台执行，用 `fg` 命令回去|

---

# T

## tar

### 参数

注意：-c / -t / -u / -x 不可同时出现

|参数（缩写）|参数（完整）|说明|
| :-------------| :------------------| :--------------------------------------------------|
|-c|--create|创建新的压缩文件|
|-d|--diff, --compare|比较压缩文件与当前压缩文件的不同之处|
|-f|--file|指定压缩文件或设备|
|-t|--list|显示压缩文件的文件目录|
|-u|--update|仅将较新的文件附加到存档中|
|-v|--verbose|详细显示处理的文件|
|-x|--extract|解压压缩文件|
|-z|--gzip|通过 gzip 对文件进行压缩或解压（.tar.gz 或 .tgz）|

### 命令

#### 压缩当前路径下的 `test/content/` 文件夹为 `file.tgz`​

```bash
tar -zcvf file.tgz test/content/
```

#### 压缩当前路径下的 `test/content/` 文件夹和 `test/text.txt` 文件为 `file.tgz`​

```bash
tar -zcvf file.tgz test/content/ test/text.txt
```

#### 压缩 `当前路径` 的文件夹为 `file.tgz`​

```bash
tar -zcvf file.tgz ./
```

#### 压缩当前路径下的 `test/content/` 文件夹为 `file.tgz`，

```bash
# 其中不包含 `test/content/text_a.txt` 文件和 `test/content/test/text_b.txt` 文件
tar --exclude=text_a.txt --exclude=test/text_b.txt -zcvf file.tgz test/content/
```

#### 解压 `当前路径` 下的 `file.tar`​

```bash
tar -xvf file.tar
```

#### 解压 `当前路径` 下的 `file.tgz`​

```bash
tar -zxvf file.tgz
```

## taskset

指定 CPU `0~3` 执行当前路径下的 `start.sh`：

```bash
taskset -c 0-3 ./start.sh
```

‍
