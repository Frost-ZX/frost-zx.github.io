---
title: "「JavaScript」修改 input type=\"file\" 元素的文件对象"
date: 2025-03-15T22:42:40Z
lastmod: 2025-03-15T22:43:04Z
tags: [Web 前端,HTML5,JavaScript,代码片段]
---

# 「JavaScript」修改 input type="file" 元素的文件对象

## 参考信息

- [Stack Overflow - Is it possible to replace a file input with a Blob](https://stackoverflow.com/questions/21892890/is-it-possible-to-replace-a-file-input-with-a-blob)

## 示例代码

```javascript
let fileItem = new File([blob], "example.txt", {
  type: "txet/plain",
  lastModified: Date.now(),
});
let container = new DataTransfer();

container.items.add(fileItem);
fileInputElement.files = container.files;
```

## 应用场景

通过 `form` 提交自定义的文件：

```javascript
let container = new DataTransfer();
let file = new File([blob], 'tp_tmp.zip');

let frame = document.createElement('iframe');
let form = document.createElement('form');
let input = document.createElement('input');

container.items.add(file);

frame.setAttribute('name', 'form-result');

form.setAttribute('action', `http://${localDeviceIP}:10808/ProcessServer/FileOperate/fileUpServlet`);
form.setAttribute('enctype', 'multipart/form-data');
form.setAttribute('method', 'post');
form.setAttribute('target', 'form-result');
form.appendChild(input);

input.setAttribute('name', 'file');
input.setAttribute('type', 'file');
input.files = container.files;

document.body.appendChild(frame);
document.body.appendChild(form);

form.submit();
```

‍
