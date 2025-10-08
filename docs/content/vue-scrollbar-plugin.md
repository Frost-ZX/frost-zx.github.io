---
title: 「Web 前端」Vue 使用滚动条插件
date: 2025-03-15T23:15:09Z
lastmod: 2025-03-15T23:15:38Z
tags: [Web 前端,JavaScript,Vue.js,代码片段]
---

# 「Web 前端」Vue 使用滚动条插件

#### PerfectScrollbar

```javascript
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

/**
 * @description 初始化 PerfectScrollbar
 * @param {HTMLElement} el DOM 元素
 * @param {object} [options] 配置选项
 * @param {boolean} [options.x] 是否启用水平滚动条，默认为 false
 * @param {boolean} [options.y] 是否启用垂直滚动条，默认为 false
 */
const fnInitScrollbar = (el, options = {}) => {
    if (!el) {
        return;
    }

    /** 自定义属性名称，保存实例 */
    const attrName = '__ps__';

    /** @type {PerfectScrollbar} */
    const instance = el[attrName];

    if (instance instanceof PerfectScrollbar) {
        // 已存在，更新
        instance.update();
    } else {
        // 不存在，创建
        el[attrName] = new PerfectScrollbar(el, {
            suppressScrollX: !options.x,
            suppressScrollY: !options.y,
            swipeEasing: true,
        });
    }
};

// 注册自定义指令 v-scrollbar
Vue.directive('scrollbar', {
    // 被绑定元素插入父节点时
    inserted: function (el, binding) {
        const rules = ['fixed', 'absolute', 'relative', 'sticky'];
        const { modifiers } = binding;

        // 判断元素是否已设置定位
        //   滚动条需要相对于父元素进行绝对定位
        if (rules.includes(getComputedStyle(el).position)) {
            fnInitScrollbar(el, {
                x: modifiers.x,
                y: modifiers.y,
            });
        } else {
            console.error('PerfectScrollbar 所在的元素未设置有效的定位');
            console.error('元素', el);
        }
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后
    componentUpdated: function (el, binding, vnode) {
        // vnode.context 为 Vue 实例
        //   也可以写成为 Vue.$nextTick()
        vnode.context.$nextTick(() => {
            fnInitScrollbar(el);
        });
    },
});
```

#### SimpleBar

```javascript
/**
 * @description 初始化 SimpleBar
 * @param {HTMLElement} el DOM 元素
 * @param {object} [options] 配置选项
 * @param {object} [options.keep] 保持显示，不自动隐藏
 */
const fnInitScrollbar = (el, options = {}) => {
    if (!el) {
        return;
    }

    /** 自定义属性名称，保存实例 */
    const attrName = '__scrollbar__';

    /** @type {SimpleBar} */
    const instance = el[attrName];

    // 移除已存在
    if (instance instanceof SimpleBar) {
        instance.unMount();
    }

    // 初始化
    el[attrName] = new SimpleBar(el, {
        autoHide: !options.keep,
        timeout: 2000,
    });
};

// 注册自定义指令 v-scrollbar
Vue.directive('scrollbar', {
    // 元素插入父节点时
    inserted: function (el, binding) {
        const { modifiers } = binding;

        fnInitScrollbar(el, {
            keep: modifiers.keep,
        });
    },
});
```

‍
