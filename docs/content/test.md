---
title: "内容格式测试"
date: 2025-03-16T22:27:03Z
lastmod: 2025-10-07T18:32:34Z
tags: [测试,格式,Markdown]
---

# 内容格式测试

## 目录

​`[TOC]`

## 字体样式

<div>
<font face="宋体">字体：宋体</font>
<br>
<font face="黑体">字体：黑体</font>
<br>
<font face="STCAIYUN">字体：华文彩云</font>
<br>
<font color="#0099FF" size="1" face="微软雅黑">颜色：#0099FF 大小：2 字体：微软雅黑</font>
<br>
<font color="#66CCFF" size="5">颜色：#66CCFF 大小：5</font>
<br>
<font color="gray" size="5">颜色：Gray 大小：5</font>
</div>

## 待办事项

- [X] 已完成
- [ ] 未完成

## 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 引用

> 一级引用
>
>> 二级引用
>>
>>> 三级引用
>>>
>>

## 列表

- 一级列表

  - 二级列表

    - 三级列表

1. 有序列表

    1. 有序子列表
    2. 有序子列表

    - 无序子列表
    - 无序子列表

- 无序列表

  1. 有序子列表
  2. 有序子列表

  - 无序子列表
  - 无序子列表

## 代码

```java
System.out.println("MarkDown");
```

```html
<a href="https://blog.frost-zx.top/">Frost-ZX</a>
<a href="https://minecraft.net/">Minecraft</a>
```

## 格式

- ​`重点文字`
- ~~删除线~~
- <u>下划线</u>
- ==高亮==
- ***粗斜体***
- **粗体**
- *斜体*

## 图片

![Favicon](/favicon.ico)

## 表格

简单的表格

|First Header|Second Header|Third Header|
| --------------| ---------------| --------------|
|Content Cell|Content Cell|Content Cell|
|Content Cell|Content Cell|Content Cell|

出于美观的考虑，可以把两端都包围起来

|First Header|Second Header|Third Header|
| --------------| ---------------| --------------|
|Content Cell|Content Cell|Content Cell|
|Content Cell|Content Cell|Content Cell|

通过在标题分隔行添加冒号 `:`，定义表格单元的对齐格式：居左、居中、居右

|First Header|Second Header|Third Header|
| :-------------| :-------------: | -------------: |
|Left|Center|Right|
|Left|Center|Right|

表格使用示例

|姓名|年龄|描述|
| :----: | :-----: | :-----|
|张三|10 岁|**加粗 Bold**|
|李四|20 岁|[链接 Link](/)|

## 其他

### 位置

<div>
<p align="left">居左</p>
<p align="center">居中</p>
<p align="right">居右</p>
</div>

### 手动换行

HTML 标签 `<br>`

‍
