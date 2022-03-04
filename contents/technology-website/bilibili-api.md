# bilibili API

# 说明

部分接口支持 JSONP

| 参数     | 说明             | 值    |
| -------- | ---------------- | ----- |
| type     |                  | jsonp |
| jsonp    |                  | jsonp |
| callback | JSONP 回调函数名 |       |

# 主站

## 创作中心

### 创作日历

请求地址：`member.bilibili.com/x2/creative/h5/calendar/card`
请求方式：GET

| 参数 | 说明         |
| ---- | ------------ |
| ts   | 时间戳（秒） |

## 动态

### @用户名列表

请求地址：`api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/name_search`
请求方式：GET

| 参数    | 说明         |
| ------- | ------------ |
| keyword | 用户名关键词 |

### 常看的UP主列表

请求地址：`api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/w_dyn_uplist`
请求方式：GET

### 动态列表

请求地址：`api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history`
请求方式：GET

| 参数              | 说明       | 值 |
| ----------------- | ---------- | -- |
| host_uid          | 对方 UID   |    |
| visitor_uid       | 查看者 UID |    |
| offset_dynamic_id |            | 0  |

## 个人空间

### relation

#### 简略

请求地址：`api.bilibili.com/x/space/acc/relation`
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| mid  | 用户 UID |

#### 详细

请求地址：`api.bilibili.com/x/relation/stat`
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| vmid | 用户 UID |

### 标签

请求地址：
请求方式：

| 参数 | 说明 |
| ---- | ---- |
|      |      |

```text
space.bilibili.com/ajax/member/getTags
?mids=用户 UID
```

### 播放量和阅读量

请求地址：`api.bilibili.com/x/space/upstat`
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| mid  | 用户 UID |

### 充电记录

请求地址：`elec.bilibili.com/api/query.rank.do`
请求方式：GET / JSONP
收录时间：2020-12-22

| 参数 | 说明     |
| ---- | -------- |
| mid  | 用户 UID |

### 公告

请求地址：api.bilibili.com/x/space/notice
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| mid  | 用户 UID |

### 关注列表

请求地址：`api.bilibili.com/x/relation/followings`
请求方式：GET

| 参数  | 说明       |
| ----- | ---------- |
| vmid  | 用户 UID   |
| pn    | 页数       |
| ps    | 每页的数量 |
| order | 排序方式   |

排序方式：

- asc - 升序
- desc - 降序

### 设定

请求地址：`space.bilibili.com/ajax/settings/getSettings`
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| mid  | 用户 UID |

### 信息（个人）

请求地址：`api.bilibili.com/x/space/myinfo`
请求方式：GET

### 信息（其他用户）

请求地址：`api.bilibili.com/x/space/acc/info`
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| mid  | 用户 UID |

## 个性装扮

### 最近购买记录

请求地址：`api.bilibili.com/x/garb/rank/fan/recent`
请求方式：GET

| 参数    | 说明    |
| ------- | ------- |
| item_id | 装扮 ID |

## 消息中心

### 消息 - 回复我的

请求地址：`message.bilibili.com/api/notify/query.replyme.list.do`
请求方式：GET

| 参数      | 说明 | 值                  |
| --------- | ---- | ------------------- |
| data_type |      | 1                   |
| cursor    |      | 1590359430000000000 |

### 消息 - @我的

请求地址：`message.bilibili.com/api/notify/query.atme.list.do`
请求方式：GET

| 参数      | 说明 | 值                  |
| --------- | ---- | ------------------- |
| data_type |      | 1                   |
| cursor    |      | 1590359430000000000 |

### 消息 - 系统通知

请求地址：`message.bilibili.com/api/notify/query.sysnotify.list.do`
请求方式：GET

| 参数      | 说明 | 值                  |
| --------- | ---- | ------------------- |
| data_type |      | 1                   |
| cursor    |      | 1590359430000000000 |

### 应援团成员列表

请求地址：`api.vc.bilibili.com/link_group/v1/group/member_list`
请求方式：GET

| 参数     | 说明     |
| -------- | -------- |
| group_id | 应援团号 |

## 活动

### 拜年祭

#### 2020

火锅材料：`api.bilibili.com/x/activity/bnj2020/material`

## 首页（PC网页端）

### GIF

#### 单个

请求地址：`api.bilibili.com/x/web-interface/index/icon`
请求方式：GET

#### 全部

请求地址：`www.bilibili.com/index/index-icon.json`
请求方式：GET

### 幻灯片

#### 番剧

请求地址：`api.bilibili.com/pgc/operation/api/slideshow?position_id=104`
请求方式：GET

#### 国创

请求地址：`api.bilibili.com/pgc/operation/api/slideshow?position_id=101`
请求方式：GET

### 时间线

#### 番剧

请求地址：`bangumi.bilibili.com/api/timeline_v2_global`
请求方式：GET

#### 国创

请求地址：`bangumi.bilibili.com/api/timeline_v2_cn`
请求方式：GET

## 视频

### 番剧信息

请求地址：`api.bilibili.com/pgc/view/web/season`
请求方式：GET

| 参数      | 说明    |
| --------- | ------- |
| season_id | 番剧 ID |

例：

```text
www.bilibili.com/bangumi/play/ss26291/
api.bilibili.com/pgc/view/web/season?season_id=26291
```

### 视频标签

请求地址：`api.bilibili.com/x/tag/archive/tags`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |

### 视频弹幕列表

请求地址：`api.bilibili.com/x/v1/dm/list.so`
请求方式：GET

| 参数 | 说明     |
| ---- | -------- |
| oid  | 视频 CID |

### 视频分P列表

请求地址：`api.bilibili.com/x/player/pagelist`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |

### 视频简介

请求地址：`api.bilibili.com/x/web-interface/archive/desc`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |

### 视频截图

请求地址：`api.bilibili.com/x/player/videoshot`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |

### 视频评论

请求地址：`api.bilibili.com/x/v2/reply`
请求方式：GET

| 参数 | 说明       | 值 |
| ---- | ---------- | -- |
| oid  | 视频 AV 号 |    |
| type |            | 1  |
| sort |            | 2  |
| pn   | 页数       |    |

### 视频评论框

访问地址：`www.bilibili.com/html/comment_frame.html`

| 参数     | 说明       |
| -------- | ---------- |
| bili-aid | 视频 AV 号 |

### 视频统计信息

请求地址：`api.bilibili.com/archive_stat/stat`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |

请求地址：`api.bilibili.com/x/web-interface/archive/stat`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |

### 视频详情

请求地址：`api.bilibili.com/x/web-interface/view/detail`
请求方式：GET

| 参数 | 说明       |
| ---- | ---------- |
| aid  | 视频 AV 号 |
| bvid | 视频 BV 号 |

### 视频播放资源信息

请求地址：`api.bilibili.com/playurl`
请求方式：GET

| 参数     | 说明       | 值    |
| -------- | ---------- | ----- |
| aid      | 视频 AV 号 |       |
| page     |            | 1     |
| platform |            | html5 |
| quality  |            | 1     |
| vtype    |            | mp4   |
| token    | token      |       |

## 其他

### 1-3day.json

```text
www.bilibili.com/index/catalogy/1-3day.json
```

### 5-3day.json

```text
www.bilibili.com/index/catalogy/5-3day.json
```

### 11-3day.json

```text
www.bilibili.com/index/catalogy/11-3day.json
```

### 23-3day.json

```text
www.bilibili.com/index/catalogy/23-3day.json
```

### ding-count.json

```text
www.bilibili.com/index/ding-count.json
```

### 表情

```text
api.bilibili.com/x/v2/reply/v2/emojis
```

### 导航栏

```text
api.bilibili.com/x/web-interface/nav
```

### 客户端启动图（Splash）

请求地址：`app.bilibili.com/x/v2/splash/list`
请求方式：GET

| 参数     | 说明           | 值          |
| -------- | -------------- | ----------- |
| birth    | 四位数生日     |             |
| build    |                | 6030600     |
| channel  |                | bilibili140 |
| mobi_app |                | android     |
| network  |                | wifi        |
| platform |                | android     |
| width    | 设备水平分辨率 |             |
| height   | 设备垂直分辨率 |             |
| ts       | 时间戳（秒）   |             |

例：

```text
app.bilibili.com/x/v2/splash/list
?birth=0101
&build=6030600
&channel=bilibili140
&mobi_app=android
&network=wifi
&platform=android
&ts=1609430400
&width=1080
&height=1819
```

### 视频推荐

#### 普通

```text
www.bilibili.com/index/recommend.json
```

#### 各个版块

```text
www.bilibili.com/index/ding.json
```

### 搜索推荐

#### 跳转到搜索页面

```text
api.bilibili.com/x/web-interface/search/default
```

#### 跳转到视频

```text
www.bilibili.com/widget/getSearchDefaultWords
```

### 用户信息

请求地址：`api.bilibili.com/x/web-interface/card`
请求方式：GET
收录时间：2022-02-01

| 参数  | 说明     | 值    |
| ----- | -------- | ----- |
| mid   | 用户 UID |       |
| photo |          | 0 / 1 |

### 播放器

访问地址：`www.bilibili.com/blackboard/newplayer.html`

| 参数        | 说明       | 值    |
| ----------- | ---------- | ----- |
| bvid        | 视频 BV 号 |       |
| autoplay    | 自动播放   | 0 / 1 |
| danmaku     | 开启弹幕   | 0 / 1 |
| lightWeight |            | 0 / 1 |

# 直播

### 相关推荐（无直播时）

请求地址：`api.live.bilibili.com/room/v1/room/get_recommend_by_room`
请求方式：GET

| 参数    | 说明   |
| ------- | ------ |
| room_id | 房间号 |
| count   | 数量   |

### 本月的签到天数

请求地址：`api.live.bilibili.com/sign/getLastMonthSignDays`
请求方式：GET

### 分区信息

请求地址：`api.live.bilibili.com/room/v1/Area/getList`
请求方式：GET

### 签到信息

请求地址：`api.live.bilibili.com/sign/GetSignInfo`
请求方式：GET

### 热门直播间

请求地址：`api.live.bilibili.com/room/v1/Index/getHotList`
请求方式：GET

### 推荐

请求地址：`api.live.bilibili.com/room/v1/RoomRecommend/biliIndexRecList`
请求方式：GET

### 已关注的直播间列表（正在直播）

请求地址：`api.live.bilibili.com/relation/v1/feed/feed_list`
请求方式：GET

| 参数     | 说明 |
| -------- | ---- |
| pagesize | 数量 |
| page     | 页数 |

### 用户信息

请求地址：`api.live.bilibili.com/xlive/web-ucenter/user/get_user_info`
请求方式：GET

# 其他

### IP 地址信息查询

请求地址：`api.live.bilibili.com/client/v1/Ip/getInfoNew`
请求方式：GET

| 参数 | 说明    |
| ---- | ------- |
| ip   | IP 地址 |
