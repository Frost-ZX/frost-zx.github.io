# Windows FORFILES 命令

FORFILES 命令用于对单个文件或一组文件执行特定的命令，通常用于批量处理文件。

## 命令语法

```text
FORFILES [/P pathname] [/M searchmask] [/S]
         [/C command] [/D [+ | -] {yyyy-MM-dd | dd}]
```

## 命令参数

```
/P    pathname      表示开始搜索的路径。默认文件夹是当前工作的目录（.）。

/M    searchmask    根据搜索掩码搜索文件。默认搜索掩码是 '*'。

/S                  指导 forfiles 递归到子目录。像 "DIR /S"。

/C    command       表示为每个文件执行的命令。命令字符串应该用双引号括起来。

                    默认命令是 "cmd /c echo @file"。下列变量可以用在命令字符串中:

                    @file    - 返回文件名。
                    @fname   - 返回不带扩展名的文件名。

                    @ext     - 只返回文件的扩展名。

                    @path    - 返回文件的完整路径。
                    @relpath - 返回文件的相对路径。

                    @isdir   - 如果文件类型是目录，返回 "TRUE"；如果是文件，返回 "FALSE"。
                    @fsize   - 以字节为单位返回文件大小。

                    @fdate   - 返回文件上一次修改的日期。

                    @ftime   - 返回文件上一次修改的时间。

                    要在命令行包括特殊字符，字符请以 0xHH 形式
                    使用十六进制代码（例如 0x09 为 tab）。

                    内部 CMD.exe 命令前面应以 "cmd /c" 开始。

/D    date          选择文件，其上一次修改日期大于或等于（+），
                    或者小于或等于（-）用 "yyyy-MM-dd" 格式指定的日期;

                    或选择文件，其上一次修改日期大于或等于（+）当前日期加 "dd" 天，
                    或者小于或等于（-）当前日期减 "dd" 天。
                    有效的 "dd" 天数可以是 0 - 32768 范围内的任何数字。
                    如果没有指定，"+" 被当作默认符号。

/?                  显示此帮助消息。
```

## 命令示例

```text
FORFILES
FORFILES /?
FORFILES /P C:\WINDOWS /S /M DNS*.*
FORFILES /S /M *.txt /C "cmd /C type @file | more"
FORFILES /P C:\ /S /M *.bat
FORFILES /D -30 /M *.exe /C "cmd /C ECHO @path 0x09 在 30 前就被更改。"
FORFILES /D 2001-01-01 /C "cmd /C ECHO @fname 在 2001年1月1日就是新的。"
FORFILES /D +2021-8-30 /C "cmd /C ECHO @fname 今天是新的。"
FORFILES /M *.exe /D +1
FORFILES /S /M *.doc /C "cmd /C ECHO @fsize"
FORFILES /M *.txt /C "cmd /C if @isdir==FALSE notepad.exe @file"
```

### 列出当前文件夹下所有文件和文件夹的相对路径

```bat
FORFILES /S /C "cmd /C ECHO @relpath"
```

### 删除指定文件夹下指定天数前的文件

```bat
FORFILES /P <文件路径> /M <搜索掩码> /S /C "cmd /C IF @isdir==FALSE DEL @path /F /Q" /D <文件日期>
```

> **<文件路径>** 示例：`"D:\Example\Folder"`、`".\Example\Folder"`  
> **<搜索掩码>** 示例：`*.exe`、`*.png`、`*.txt`  
> **<文件日期>** 示例：`-100`（100 天前）、`-200`（200 天前）、`-365`（365 天前）

## 相关链接

- [Microsoft Docs - forfiles](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/forfiles)
- [CSDN - forfiles 命令说明 & 用法示例](https://blog.csdn.net/sandy9919/article/details/82932460)
- [CSDN - 使用 CMD 删除指定文件夹下指定时间的文件](https://blog.csdn.net/qq_35957944/article/details/108282201)
