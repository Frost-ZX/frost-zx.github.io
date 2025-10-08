---
title: 临时设置 Java 环境变量（PATH）
date: 2025-03-16T16:09:15Z
lastmod: 2025-03-16T16:10:28Z
tags: [Linux,Windows,命令,命令提示符,Java,终端]
---

# 临时设置 Java 环境变量（PATH）

适用于 Linux 和 Windows 系统。对于 Linux 系统，可在终端或脚本文件中使用；对于 Windows 系统，可在命令提示符或批处理文件中使用。

---

## Linux

例如设置为 JDK 16：

```bash
export JAVA_HOME=/home/jdk/jdk_16
export PATH=$JAVA_HOME/bin:$PATH
```

其中，`/home/jdk/jdk_16` 为使用的 JDK 的安装路径，需要根据实际情况进行修改。

## Windows

例如设置为 JDK 16：

```bat
SET JAVA_HOME=C:\Programs\System\Java\jdk_16.0.2
SET PATH=%JAVA_HOME%\bin;%PATH%
```

其中，`C:\Programs\System\Java\jdk_16.0.2` 为使用的 JDK 的安装路径，请需要实际情况进行修改。

‍
