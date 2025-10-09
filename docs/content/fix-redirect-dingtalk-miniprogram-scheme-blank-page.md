---
title: 解决钉钉通过短链接跳转小程序 scheme 的方式打开小程序时会有一个空白页面的问题
date: 2025-03-22T22:17:11Z
lastmod: 2025-03-22T22:32:06Z
tags: [钉钉,小程序,Web 前端]
---

# 解决钉钉通过短链接跳转小程序 scheme 的方式打开小程序时会有一个空白页面的问题

## 参考资料

- [小程序 scheme - 钉钉开放平台](https://open.dingtalk.com/document/orgapp/scheme-of-mini-programs)
- [关闭当前页面 - 钉钉开放平台](https://open.dingtalk.com/document/orgapp/close-the-current-page)

- [钉钉 JS-API | 钉钉宜搭·开发者中心](https://dingtalk-yida.github.io/developer-site/docs/api/dingAPI/)

## 页面代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小程序</title>
</head>
<body>
  <div id="result"></div>
  <script src="https://g.alicdn.com/dingding/dingtalk-jsapi/2.15.5/dingtalk.open.js"></script>
  <script>
    window.addEventListener('load', function () {
      let element = document.getElementById('test');
      let url = 'dingtalk://dingtalkclient/action/open_micro_app?corpId=<corpId>&miniAppId=<miniAppId>&agentId=<agentId>&pVersion=1&packageType=1&page=pages/HomeView/Index';
      // 打开小程序
      location.href = url;
      // 关闭当前页面
      window.dd.biz.navigation.close({
        onFail : function(error) {
          element.textContent = `操作失败：${error}`;
        },
        onSuccess: function() {
          element.textContent = `操作成功`;
        },
      });
    });
  </script>
</body>
</html>
```

‍
