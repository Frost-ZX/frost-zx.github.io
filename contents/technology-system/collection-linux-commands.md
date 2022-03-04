# 「合集」Linux 常用命令

收集整理，自用。

# I

## init

#### 重启

```bash
init 6
```

# P

## pkill (强制踢掉登录的用户)

#### 查看用户 

Linux 系统 root 用户可强制踢制其它登录用户，非 root 用户只能踢掉当前用户名的用户。用 `w` 命令可以查看登录的用户的信息。

#### 强制踢人

**命令格式**

```bash
pkill -kill -t tty
```

**解释**

`tty` 为要踢的用户的 tty

> 例: pkill -kill -t pts/1

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

| 按键  | 作用                                                        |
| :---- | :---------------------------------------------------------- |
| C-A ? | 显示所有键绑定信息                                          |
| C-A X | 锁定当前的 screen session，需用用户密码解锁                 |
| C-A D | detach，暂时断开当前的 screen session，用 `screen` 命令回去 |
| C-A Z | 把当前的 screen session 放到后台执行，用 `fg` 命令回去      |

# T

## tar

### 参数

> -c / -t / -u / -x 不可同时出现

| 参数（缩写） | 参数（完整）      | 说明                                              |
| :----------- | :---------------- | :------------------------------------------------ |
| -c           | --create          | 创建新的压缩文件                                  |
| -d           | --diff, --compare | 比较压缩文件与当前压缩文件的不同之处              |
| -f           | --file            | 指定压缩文件或设备                                |
| -t           | --list            | 显示压缩文件的文件目录                            |
| -u           | --update          | 仅将较新的文件附加到存档中                        |
| -v           | --verbose         | 详细显示处理的文件                                |
| -x           | --extract         | 解压压缩文件                                      |
| -z           | --gzip            | 通过 gzip 对文件进行压缩或解压（.tar.gz 或 .tgz） |

### 命令

#### 压缩当前路径下的 `Test/Content/` 文件夹为 `File.tgz`

```bash
tar -zcvf File.tgz Test/Content/
```

#### 压缩当前路径下的 `Test/Content/` 文件夹和 `Test/Text.txt` 文件为 `File.tgz`

```bash
tar -zcvf File.tgz Test/Content/ Test/Text.txt
```

#### 压缩 `当前路径` 的文件夹为 `File.tgz`

```bash
tar -zcvf File.tgz ./
```

#### 压缩当前路径下的 `Test/Content/` 文件夹为 `File.tgz`，

```bash
# 其中不包含 `Test/Content/TextA.txt` 文件和 `Test/Content/Test/TextB.txt` 文件
tar -zcvf File.tgz Test/Content/ --exclude=TextA.txt --exclude=Test/TextB.txt
```

#### 解压 `当前路径` 下的 `File.tar`

```bash
tar -xvf File.tar
```

#### 解压 `当前路径` 下的 `File.tgz`

```bash
tar -zxvf File.tgz
```

## taskset

#### 指定 CPU `0~3` 执行当前路径下的 `Start.sh`

```
taskset -c 0-3 ./Start.sh
```
