---
title: "「Web 前端」通过 iframe 实现 form 表单提交不跳转页面"
date: 2025-03-15T22:49:42Z
lastmod: 2025-03-15T22:50:25Z
tags: [Web 前端,HTML5,代码片段]
---

# 「Web 前端」通过 iframe 实现 form 表单提交不跳转页面

## 参考信息

- [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)

## 示例代码

可以通过 `form`​ 的 `target` 属性指定在提交表单之后，在哪里显示响应信息：

```html
<form action="example.php" method="post" target="result_element">
  <input name="input_text" type="text" />
  <input name="form_submit" type="submit" value="提交" />
</form>
<!-- example.php 页面返回的数据，将会在 iframe 中显示 -->
<iframe name="result_element"></iframe>
```

## 注意事项

- ​`form`​ 元素中的 `target`​ 属性值需要对应目标 `iframe`​ 元素的 `name` 属性值。
- ​`iframe`​ 元素可以放到 `body` 中的任意位置。

‍
