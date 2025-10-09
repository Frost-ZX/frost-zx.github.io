---
title: 使用 FFmpeg 合并多个视频文件
date: 2025-04-18T22:50:14Z
lastmod: 2025-07-03T21:58:34Z
tags: [FFmpeg,命令]
---

# 使用 FFmpeg 合并多个视频文件

## 操作步骤

1. 将合并的视频文件都放在同一个文件夹下，例如：`file_1.flv` `file_2.flv`​
2. 新建一个 `video.txt` 文件，写入需要合并的视频文件名称，例如：

    ```plaintext
    file 'file_1.flv'
    file 'file_2.flv'
    ```
3. 执行 `ffmpeg` 命令：

    ```plaintext
    ffmpeg -f concat -i video.txt -c copy result.flv
    ```

‍
