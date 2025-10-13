---
title: "HTML5 使用 FileReader 读取并预览文件内容"
date: 2025-03-16T18:26:17Z
lastmod: 2025-03-16T18:27:48Z
tags: [代码片段,HTML5,JavaScript,Web 前端]
---

# HTML5 使用 FileReader 读取并预览文件内容

## 参考

- https://blog.csdn.net/liguodong456/article/details/83038619

## HTML

```html
<div>
    <h2>文本：</h2>
    <input type="file" id="file-text" accept="*" />
</div>
<div>
    <h2>二进制：</h2>
    <input type="file" id="file-bin" accept="*" />
</div>
<div>
    <h2>图像：</h2>
    <input type="file" id="file-image" accept="image/*" />
</div>
<div id="file-result" style="white-space: pre;"></div>
```

## JavaScript

```javascript
/* 选择文件 */
var fileText = document.querySelector("#file-text");
var fileBinary = document.querySelector("#file-bin");
var fileImage = document.querySelector("#file-image");

/* 结果 */
var fileResult = document.querySelector("#file-result");

/* 检测是否支持 FileReader */
if (typeof (FileReader) === "undefined") {
    fileResult.innerHTML = "您的浏览器不支持 FileReader";
} else {
    var reader = new FileReader();

    fileText.onchange = function () {
        var file = fileText.files[0];
        reader.readAsText(file, "utf-8"); // 将文件以 UTF-8 编码读取为文本
        reader.onload = function () {
            fileResult.innerHTML = reader.result;
        };
    }

    fileBinary.onchange = function () {
        var file = fileBinary.files[0];
        reader.readAsBinaryString(file);
        reader.onload = function () {
            fileResult.innerHTML = reader.result;
        };
    }

    fileImage.onchange = function () {
        var file = fileImage.files[0];
        reader.readAsDataURL(file);
        reader.onload = function () {
            fileResult.innerHTML = '<img src="' + reader.result + '" style="width: 100%;" />'
        };
    }
}
```

‍
