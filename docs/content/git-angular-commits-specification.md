---
title: "Git 提交信息规范（Angular）"
date: 2025-02-13T09:57:48Z
lastmod: 2025-02-13T09:58:02Z
tags: [Git,开发,规范]
---

# Git 提交信息规范（Angular）

## 参考资料

- [Angular 提交规范 - GitGuide](https://zjdoc-gitguide.readthedocs.io/zh_CN/latest/message/angular-commit.html)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

## 提交格式

```text
<type>(<scope>): <subject>
<blank line>
<body>
<blank line>
<footer>
```

提交信息中可以包含页眉（`header`​）、正文（`body`​）和页脚（`footer`​），**页眉内容为必须**，每次提交的信息不超过 `100`​ 个字符。  
页眉中包含提交类型（`type`​）、作用域（`scope`​，可选）和主题（`subject`）。

## 提交类型

提交类型为下面其中一个：

1. ​`build`：对构建系统或者外部依赖项进行了修改
2. ​`ci`：对CI配置文件或脚本进行了修改
3. ​`docs`：对文档进行了修改
4. ​`feat`：增加新的功能
5. ​`fix`​：修复 `bug`
6. ​`pref`：提高性能的代码更改
7. ​`refactor`​：既不是修复 `bug` 也不是添加功能的代码重构
8. ​`style`：不影响代码含义的修改，例如空格、格式化、缺失的分号等
9. ​`test`：增加确实的测试或者矫正已存在的测试

## 作用域

作用域可以是任何指定提交更改位置的内容。

## 主题

主题包括了对本次修改的简洁描述，有以下准则：

1. 使用命令式，使用现在时态：“改变”而不是“已改变”也不是“改变了”
2. 不要大写首字母
3. 不在末尾添加句号

## 正文

和主题设置类似，使用命令式、现在时态，应该包含修改的动机以及和之前行为的对比。

## 页脚

### Breaking changes

不兼容修改指的是本次提交修改了不兼容之前版本的 `API` 或者环境变量

所有不兼容修改都必须在页脚中作为中断更改块提到，以 `BREAKING CHANGE: ` 开头，后跟一个空格或者两个换行符，其余的信息就是对此次修改的描述，修改的理由和修改注释

```text
BREAKING CHANGE: isolate scope bindings definition has changed and the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:

...
...

After:

...
...

The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

### 引用提交的问题

如果本次提交目的是修改 `issue`​ 的话，需要在页脚引用该 `issue`

以关键字 `Closes` 开头，例如

```text
Closes #234
```

如果修改了多个 `bug`，以逗号隔开

```text
Closes #123, #245, #992
```

## 回滚设置

当此次提交包含回滚（`revert`​）操作，那么页眉以 `"revert:"`​ 开头，同时在正文中添加 `"This reverts commit hash"`​，其中 `hash` 值表示被回滚前的提交

```text
revert:<type>(<scope>): <subject>
<BLANK LINE>
This reverts commit hash
<other-body>
<BLANK LINE>
<footer>
```

‍
