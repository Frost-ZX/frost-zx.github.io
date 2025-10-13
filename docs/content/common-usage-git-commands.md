---
title: "常用的 Git 命令"
date: 2025-02-11T20:43:29Z
lastmod: 2025-02-20T22:59:20Z
tags: [Git,命令,开发]
---

# 常用的 Git 命令

参考资料：[Git 大全 - Gitee.com](https://gitee.com/all-about-git)

## git config

### 编辑全局 Git 配置

```bash
git config --global -e
```

### 编辑当前 Git 配置

```bash
# 默认为当前，“--local”可以省略
git config --local -e
```

### 配置用户名和邮箱

```text
git config --global user.name '用户名'
git config --global user.email '邮箱'
```

### 开启 GPG 签名 commit

```text
git config --global commit.gpgsign true
```

注意：需要进行相关配置后才能正确开启（[如何在 Gitee 上使用 GPG](https://gitee.com/help/articles/4248)、[使用 GPG 签名你的 commit](https://www.cnblogs.com/xueweihan/p/5430451.html)）。

## git log

### 单行显示

​`git log --oneline`

把每一条提交压缩到只有一行，仅保留短哈希、提价说明等最必要的信息，以一种更干净的方式查看提交。

### 显示差异

​`git log -p`

展示带有改动内容的历史，可以看到每条提交都改动了哪些内容。

### 按作者过滤

添加参数 `--author` 以按作者过滤：

```text
git log --author='example'
```

Git 会使用正则来进行筛选和过滤，因此非准确的名字或大小写不一致也可以。

### 按时间过滤

添加参数 `--after`​ 和 `--before` 以按时间过滤。

2021-01-01 之后：

```text
git log --after='2021-01-01'
```

2022-01-01 到 2022-12-31 之间：

```text
git log --after='2022-01-01' --before='2022-12-31'
```

还可以使用以下格式：

```bash
# 仅今天
git log --after='today'

# 昨天以来
git log --after='yesterday'

# 一周前以来
git log --after='1 week ago'

# 十天之前
git log --before='10 day ago'
```

### 按提交信息过滤

添加参数 `--grep` 以使用正则表达式按提交信息过滤。

列出以“feat: ”开头的提交：

```text
git log --grep='^feat: ' --oneline
```

默认区分大小写，添加 `-i` 参数以不区分大小写：

```text
git log -i --grep='^feat: ' --oneline
```

多个条件：

```text
git log --oneline --grep='^feat: \|^refactor: '
```

### 列出某个文件的历史记录

单个文件：

```text
git log index.html
```

多个文件：

```text
git log index.html index.js
```

### 其它

```bash
# 仅列出合并
git log --merges

# 列出两个分支间的差异
git log main..develop
```

## git remote

刷新远程分支信息：

```text
git remote update origin --prune
```

## git reset

回退记录，保留文件：

```text
git reset --soft head^
```

## 其它命令

### 初始化 Git

在当前文件夹：

```text
git init
```

新建文件夹：

```text
git init [directory]
```

### 下载一个项目到本地

包含全部代码提交记录：

```text
git clone [url]
```

克隆指定分支：

```text
git clone -b [branch] [url]
git clone --branch [branch] [url]
```

只克隆最近一次 commit：

```text
git clone --depth=1 [url]
```

### 分支

```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 新建一个分支，指向指定commit
git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 切换到上一个分支
git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
git merge [branch]

# 选择一个commit，合并进当前分支
git cherry-pick [commit]

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```

### 增加 / 删除文件

```bash
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
git add -p

# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```

### 代码提交

```bash
# 提交暂存区到仓库区
git commit -m [message]

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次 commit 之后的变化，直接到仓库区
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次新的 commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息
git commit --amend -m [message]

# 重做上一次 commit，并包括指定文件的新变化
git commit --amend [file1] [file2] ...
```

### GC

自动判断：

```text
git gc --auto
```

更积极地优化存储库：

```text
git gc --aggressive --prune=now
```

### 修改历史提交内容

1. 查看提交记录：

    ```text
    git log --oneline
    ```

    假设需要修改的提交记录为 `e2394c2`。
2. 通过 rebase 将 HEAD 回退到需要修改的位置前：

    ```text
    git rebase e2394c2^ --interactive
    ```
3. 在打开的编辑界面中将需要修改的提交前的 `pick`​ 改为 `edit`，然后保存退出。
4. 修改文件，然后重新提交。

    ```text
    git add example.html
    git commit --amend
    ```

    注意：提交使用的参数是 `--amend`。
5. 执行 `git rebase --continue`​ 命令逐步前进到最新的提交位置。  
    注意：修改文件后可能会产生冲突，解决冲突并提交后需要再次执行 `git rebase --continue` 命令以继续。
6. 提交到远程：

    ```text
    git push origin -f
    ```

### 重置分支内容为另一分支

```text
git checkout 操作分支名
git reset --hard 另一分支名
git push --force origin 操作分支名
```

### 快速迁移仓库

#### 方式一，直接在原仓库的文件夹中操作，需要本地有全部分支和标签信息

```text
git push --all 新的仓库地址
git push --tags 新的仓库地址
git remote set-url origin 新的仓库地址
```

#### 方式二，在新的文件夹中操作，将原仓库的全部分支和标签拉取到本地然后推送到新仓库

```text
git clone --bare 原仓库地址
cd 仓库名称.git
git push --all 新的仓库地址
git push --tags 新的仓库地址
```

回到原仓库的文件夹，更新远程地址

```text
git remote set-url origin 新的仓库地址
```

‍
