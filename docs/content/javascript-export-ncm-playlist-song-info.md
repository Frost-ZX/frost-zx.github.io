---
title: 「JavaScript」提取（导出）网易云音乐歌单歌曲列表信息为文件
date: 2025-03-16T16:11:23Z
lastmod: 2025-03-16T16:12:07Z
tags: [代码片段,JavaScript,Web 前端,网易云音乐,信息,导出]
---

# 「JavaScript」提取（导出）网易云音乐歌单歌曲列表信息为文件

提取网易云音乐歌单页面中的歌曲列表信息，导出为 JSON 文件。

在浏览器的“开发人员工具”的 Console（控制台）中使用。

使用前需要登录，否则页面中最多显示 10 首歌曲（登录后最多显示 1000 首歌曲）。

用处不大（毕竟有接口可以用，而且获取到的信息更多），只是突然想到就记录下来了。

---

## 代码

#### 提取

```javascript
/**
 * 提取网易云音乐 [歌单页面](https://music.163.com/#/playlist?id=歌单ID) 中的歌曲列表信息
 * 更新：2021-05-03
 *
 * @returns {object[]} 对象数组，对象中包含歌曲 album、artists、duration、id、title 信息
 */
function getPlaylistSongInfo() {

    // 全部歌曲数据
    var songs = [];

    // iframe
    var frameDoc = document.querySelector("#g_iframe").contentDocument;

    // 表格行 tr
    var songListTRs = frameDoc.querySelectorAll("#m-playlist .m-table tbody tr");

    // 遍历
    songListTRs.forEach(function (row) {
        // 表格列 td
        var rowCols = row.querySelectorAll("td");
        // 当前行歌曲信息
        var info = {
            album: rowCols[4].querySelector('.text > a').title,
            artists: rowCols[3].querySelector('.text').title.split('/'),
            duration: rowCols[2].querySelector('span').textContent,
            id: rowCols[0].querySelector('.ply').dataset.resId,
            title: rowCols[1].querySelector('.txt > a b').title
        };

        songs.push(info);
    });

    return songs;

}
```

#### 转文件

```javascript
/**
 * 字符串转文件
 *
 * @param {string} data 字符串数据
 * @param {string} filename 文件名
 * @param {string} filetype 文件类型（MIME）
 */
function strToFile(data = '', filename = 'export.txt', filetype = 'text/plain') {

    // 转为 Blob
    var strToBlob = new Blob([data], { type: filetype });
    // URL 对象兼容性处理
    var urlObject = window.URL || window.webkitURL || window;
    // 创建对象 URL
    var blobURL = urlObject.createObjectURL(strToBlob);
    // 创建 a 元素
    var aElem = document.createElement('a');

    // 设置属性
    aElem.classList.add('hidden');
    aElem.download = filename;
    aElem.href = blobURL;
    aElem.target = '_blank';

    // 添加元素
    document.body.appendChild(aElem);

    // 模拟点击
    aElem.click();

    // 移除元素
    aElem.remove();

    // 释放对象
    urlObject.revokeObjectURL(blobURL);

}
```

#### 调用

```javascript
var objData = {
    data: getPlaylistSongInfo()
};
var objStr = JSON.stringify(objData);

strToFile(objStr, 'export.json', 'application/json');
```

‍
