---
title: "Nginx 常用配置文件片段"
date: 2025-03-15T22:57:21Z
lastmod: 2025-03-15T22:59:02Z
tags: [配置,Nginx,服务器,网站]
---

# Nginx 常用配置文件片段

## 宝塔单域名子目录站点

可直接在 “伪静态” 内填写；假设域名为 “www.example.com”。

```nginx
# 注意 alias 和 root 的区别

## 访问：`http://www.example.com/example_1/index.html`
## 实际：`/www/wwwroot/example_site/example_1/index.html`
## 注意：不要漏掉末尾的 `/`，以免产生目录穿越漏洞
location ^~ /example_1/ {
  root /www/wwwroot/example_site;
  # 可选，默认与“server”中指定的一致
  index index.php index.html;
  # 启用 PHP，仅在使用“root”时可用
  include /www/server/nginx/conf/enable-php-74.conf;
}

## 访问：`http://www.example.com/example_2/index.html`
## 实际：`/www/wwwroot/example_site/example_2/index.html`
location ^~ /example_2/ {
  alias /www/wwwroot/example_site/example_2/;
  index index.php index.html;
}
```

​`enable-php-74.conf` 文件中的内容（该文件自带，不需要创建或修改）：

```nginx
location ~ [^/]\.php(/|$) {
  try_files $uri =404;
  fastcgi_pass  unix:/tmp/php-cgi-74.sock;
  fastcgi_index index.php;
  include fastcgi.conf;
  include pathinfo.conf;
}
```

## 负载均衡

```nginx
upstream example_servers {
  server 192.168.1.101:8080 weight=30;
  server 192.168.1.102:8080 weight=20;
  server 192.168.1.103:8080 weight=10;
  # weight 可选，表示权重，值越大则被分配到的几率越大
}

server {
  listen 80;
  server_name www.example.com;
  location / {
    proxy_pass http://example_servers;
  }
}
```

## 禁止访问

禁止访问部分扩展名文件

```nginx
location ~ \.(conf|ini|php)$ {
  deny all;
}
```

禁止访问目录

```nginx
location ^~ /example/ {
  deny all;
}
```

## 添加跨域响应头

```nginx
location / {
  # add_header 'Access-Control-Allow-Origin' '$http_origin';
  add_header 'Access-Control-Allow-Origin' '*';
  add_header 'Access-Control-Allow-Methods' 'OPTIONS, GET, POST';
  add_header 'Access-Control-Allow-Headers' 'Cache-Control, Content-Type, User-Agent, X-Requested-With';
  add_header 'Access-Control-Allow-Credentials' 'true';

  if ($request_method = 'OPTIONS') {
    return 204;
  }
}
```

## 一个 server 配置多个域名

​`server_name` 中以空格分隔多个域名：

```nginx
server {
  listen 80;
  server_name a.frost-zx.top b.frost-zx.top;
  ...
}
```

## 一个 server 配置多个类型的 SSL 证书

参考：[Module ngx_http_ssl_module](https://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_certificate)

注意：只有 OpenSSL 1.0.2 及以上版本支持

将 `ssl_certificate`​ 和 `ssl_certificate_key`，复制多一份，然后把路径修改为其他类型证书的路径：

```nginx
server {
  listen              443 ssl;
  server_name         example.com;

  ssl_certificate     example.com.rsa.crt;
  ssl_certificate_key example.com.rsa.key;

  ssl_certificate     example.com.ecdsa.crt;
  ssl_certificate_key example.com.ecdsa.key;

  ...
}
```

## 域名重定向

```nginx
server {

  ...

  if ($host ~ '^www.example.com') {
    return 301 https://test.example.com/;
  }

  ...

}
```

‍
