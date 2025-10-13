---
title: "CORS 预检请求（preflight request）"
date: 2025-03-15T23:08:14Z
lastmod: 2025-03-15T23:08:41Z
tags: [Web 前端,JavaScript,HTTP]
---

# CORS 预检请求（preflight request）

## 内容来源

- [Preflight request - 术语表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Preflight_request)
- [跨源资源共享（CORS） - HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

## 简介

CORS 预检请求主要用于检测服务器是否支持 CORS（跨域资源共享）。

当有必要的时候，浏览器会自动发出一个预检请求；因此在正常情况下，前端开发者不需要自己去发这样的请求。

## 触发条件

某些请求（以下称其为 “简单请求”）不会触发 CORS 预检请求。  
若请求满足所有下述条件，则该请求可视为 “简单请求”：

- 使用下列请求方式之一

  - GET
  - HEAD
  - POST
- 除了被用户代理自动设置的 Header（例如 Connection、User-Agent）和其他不在 Fetch 规范中定义的 [禁用的 Header 名称](https://fetch.spec.whatwg.org/#forbidden-header-name) ，允许人为设置下列 [对 CORS 安全的 Header 字段](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)

  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type（需要注意额外的限制）
- 在 Header 中，`Content-Type` 的值为下列之一

  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded
- 请求中的任意 `XMLHttpRequest`​ 对象均没有注册任何事件监听器；可以通过 `XMLHttpRequest.upload`​ 属性访问 `XMLHttpRequest` 对象。
- 请求中没有使用 `ReadableStream` 对象。

‍
