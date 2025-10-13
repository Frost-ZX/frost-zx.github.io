---
title: "「Web 前端」Vue CLI 配置 Less 全局变量"
date: 2025-03-15T23:16:58Z
lastmod: 2025-03-15T23:19:03Z
tags: [Web 前端,Vue.js,Vue CLI,JavaScript,教程]
---

# 「Web 前端」Vue CLI 配置 Less 全局变量

## 参考资料

- [Working with CSS | Vue CLI](https://cli.vuejs.org/guide/css.html#automatic-imports)
- [vue-cli-plugin-style-resources-loader - npm](https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader)

## 预先准备

1. 若项目正在运行，需要先停止。

    > 安装依赖和修改 `vue.config.js` 需要重新启动项目以生效。
    >
2. 安装 `less`​ 和 `less-loader`。

    > 若已安装则可忽略（例如使用 Vue CLI 创建项目时选择了 Less CSS 预处理器）。
    >

    ```plaintext
    npm install less less-loader --save-dev
    # 可以简写为
    npm i less less-loader -D
    ```

## 方式一、手动配置

1. 安装 `style-resources-loader`。

    ```plaintext
    npm install style-resources-loader --save-dev
    ```
2. 修改项目根目录下的 `vue.config.js` 文件（若无则创建）。

    > 以使用 `src/assets/css/global.less`​ 和 `src/assets/css/variables.less` 文件为例。
    >

    ```javascript
    const path = require('path');

    function addStyleRes({ config = null, processor = '', patterns = [] }) {
        if (!config) {
            return;
        }

        const rule = config.module.rule(processor);
        const types = ['normal', 'normal-modules', 'vue', 'vue-modules'];

        types.forEach((type) => {
            rule.oneOf(type)
                .use('style-resources-loader')
                .loader('style-resources-loader')
                .options({ patterns });
        });
    }

    module.exports = {
        chainWebpack: (config) => {

            addStyleRes({
                config,
                processor: 'less',
                patterns: [
                    path.resolve(__dirname, 'src/assets/css/global.less'),
                    path.resolve(__dirname, 'src/assets/css/variables.less'),
                ]
            });

        },
    };
    ```

## 方式二、使用插件

1. 安装 `style-resources-loader` 插件。

    > 注意：  
    > 安装该插件时会自动修改 `vue.config.js` 文件，建议先使用 Git 暂存或提交当前的更改后再安装。  
    > 安装过程中可能会弹出 CSS 预处理器选择菜单，根据实际情况选择即可。
    >

    ```plaintext
    vue add style-resources-loader
    ```
2. 根据需要修改 `vue.config.js` 文件。

    > 以使用 `src/assets/css/global.less`​ 和 `src/assets/css/variables.less` 文件为例。
    >

    ```javascript
    const path = require('path');

    module.exports = {
        pluginOptions: {

            'style-resources-loader': {
                preProcessor: 'less',
                patterns: [
                    path.resolve(__dirname, 'src/assets/global.less'),
                    path.resolve(__dirname, 'src/assets/variables.less'),
                ],
            },

        },
    };
    ```

‍
