# 临时设置 Java 环境变量（PATH）

适用于 Linux 系统和 Windows 系统。
对于 Linux 系统，可在终端或脚本文件中使用；
对于 Windows 系统，可在命令提示符或脚本文件中使用。
若在终端活命令提示符中使用，每个会话只需要执行一次，否则会重复添加。

## Linux

例如设置为 JDK 16：

```text
export JAVA_HOME=/home/jdk/jdk_16
export PATH=$JAVA_HOME/bin:$PATH
```

其中，`/home/jdk/jdk_16` 为需要使用的 JDK 的安装路径，请根据实际情况进行修改。

## Windows

例如设置为 JDK 16：

```text
SET JAVA_HOME=C:\Programs\System\Java\jdk_16.0.2
SET PATH=%JAVA_HOME%\bin;%PATH%
```

其中，`C:\Programs\System\Java\jdk_16.0.2` 为需要使用的 JDK 的安装路径，请根据实际情况进行修改。
