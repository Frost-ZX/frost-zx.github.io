---
title: 「合集」常用的 JavaScript 代码
date: 2025-03-16T22:02:06Z
lastmod: 2025-03-16T22:02:51Z
tags: [合集,代码片段,Web 前端,JavaScript]
---

# 「合集」常用的 JavaScript 代码

## document

#### 焦点不在当前窗口时改变标题

```javascript
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '焦点不在当前窗口';
  } else {
    document.title = '焦点在当前窗口';
  }
});
```

#### 解除离开页面检测

```javascript
document.hasFocus = function () {
  return true;
};
```

#### 使网页内容（body）可编辑

**开启**

```javascript
document.body.contentEditable = 'true';
document.designMode = 'on';
```

```javascript
(function () {
  let items = document.querySelectorAll('iframe');
  for (let i = 0; i < items.length; i++) {
    try {
      items[i].contentDocument.body.contentEditable = 'true';
      items[i].contentDocument.designMode = 'on';
    } catch (err) {
      console.log(err);
    }
  }
})();
```

**关闭**

```javascript
document.body.contentEditable = 'false';
document.designMode = 'off';
```

```javascript
(function () {
  let items = document.querySelectorAll('iframe');
  for (let i = 0; i < items.length; i++) {
    try {
      items[i].contentDocument.body.contentEditable = 'false';
      items[i].contentDocument.designMode = 'off';
    } catch (err) {
      console.log(err);
    }
  }
})();
```

---

## function

#### 查找元素的 Vue 对象

```javascript
/**
 * @typedef  {object} FunctionResult
 * @property {boolean}     state   是否查找成功
 * @property {HTMLElement} element Vue 对象所在的元素
 * @property {object}      data    找到的 Vue 对象
 * @property {object[]}    parents 父 Vue 对象
 */

/**
 * @description 查找元素的 Vue 对象
 * @param   {HTMLElement} el 需要查找的元素
 * @returns {FunctionResult} 返回查找结果信息
 */
function findElementVue(el) {

  /** @type {FunctionResult} */
  const result = {
    state: false,
    element: null,
    data: null,
    parents: [],
  };

  const attrName = '__vue__';

  // 查找属性
  while (el) {
    const data = el[attrName];
    if (data) {
      result.state = true;
      result.element = el;
      result.data = data;
      break;
    } else {
      el = el.parentElement;
    }
  }

  // 查找父对象
  if (result.state) {
    let attrName = '$parent';
    let parent = result.data[attrName];

    while (parent) {
      result.parents.push(parent);
      parent = parent[attrName];
    }
  }

  return result;

}
```

#### 查找字符 `char` 在 `str` 中第 `num` 次出现的位置

```javascript
function findChar(str = '', char = '', num = 1) {
  var index = str.indexOf(char);
  num = num - 1;
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      index = str.indexOf(char, index + 1);
    }
  }
  return index;
}
```

#### 格式化时间

```javascript
/**
  * @description 格式化时间
  * @param   {(number|string|Date)} [time] 要格式化的时间（默认当前）
  * @param   {string} [format] 需要的格式（默认 yyyy-mm-dd hh:ii:ss）
  * @returns {string} 格式化后的时间
  */
function formatTime(time = new Date(), format = 'yyyy-mm-dd hh:ii:ss') {

  let timeType = typeof time;

  /** @type {Date} */
  let dateObj = null;

  if (timeType == 'number' || timeType == 'string') {
    dateObj = new Date(time);
  } else if (timeType == 'object') {
    dateObj = time;
  }

  // 时间信息
  let timeInfo = {
    // 年月日
    y: dateObj.getFullYear(),
    m: dateObj.getMonth() + 1,
    d: dateObj.getDate(),
    // 时分秒
    h: dateObj.getHours(),
    i: dateObj.getMinutes(),
    s: dateObj.getSeconds(),
  };

  // 格式占位符正则
  let formatReg = {
    y: /y+/g,
    m: /m+/g,
    d: /d+/g,
    h: /h+/g,
    i: /i+/g,
    s: /s+/g,
  };

  for (let key in formatReg) {

    // 正则匹配
    let matched = format.match(formatReg[key]);

    // 获取对应的时间
    let timeValue = String(timeInfo[key]);

    // 无匹配结果
    if (!matched) {
      continue;
    }

    // 根据匹配结果（位数）进行替换
    matched.forEach(function (v) {
      let tLength = timeValue.length;
      let vLength = v.length;
      // 长度不足，补零
      if (tLength < vLength) {
        timeValue = timeValue.padStart(v.length, '0');
      }
      // 长度超出，截取
      // if (tLength > vLength) {
      //   timeValue = timeValue.substring(tLength - vLength);
      // }
      // 替换对应的值
      format = format.replace(v, timeValue);
    });

  }

  return format;

}
```

#### 获取随机的十六进制色

```javascript
/** 获取随机的十六进制色 */
function getHEXColor() {
  var codes = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
  ];
  var colors = ['#'];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    colors.push(codes[index]);
  }
  return colors.join('');
}
```

#### 获取元素的边界信息

```javascript
/**
 * @description 获取元素的边界信息（当前元素必须在父元素内）
 * @param {Element} curr   当前 DOM 元素
 * @param {Element} parent 父 DOM 元素
 */
function getBoundaryInfo(curr, parent) {

  if (!curr || !parent) {
    console.error('获取失败，缺少参数！');
    return null;
  }

  var result = {};
  var currRect = curr.getBoundingClientRect();
  var parentRect = parent.getBoundingClientRect();

  // 当前元素四角坐标和宽高
  result.curr = {
    x0: currRect.left,
    x1: currRect.right,
    y0: currRect.top,
    y1: currRect.bottom,
    w: currRect.width,
    h: currRect.height,
  };

  // 父元素四角坐标
  result.parent = {
    x0: parentRect.left,
    x1: parentRect.right,
    y0: parentRect.top,
    y1: parentRect.bottom,
    w: parentRect.width,
    h: parentRect.height,
  };

  // 距离
  result.distance = {
    top: result.curr.y0 - result.parent.y0,
    bottom: result.parent.y1 - result.curr.y1,
    left: result.curr.x0 - result.parent.x0,
    right: result.parent.x1 - result.curr.x1,
  };

  return result;

}
```

#### 获取元素的坐标信息

```javascript
/**
 * @description 获取元素的坐标信息（四个角以及宽高）
 * @param {Element} element DOM 元素
 */
function getElemPosInfo(element) {
  if (!element) {
    console.error('获取失败，缺少参数！');
    return null;
  }
  let rect = element.getBoundingClientRect();
  let data = {
    x0: rect.left,
    x1: rect.right,
    y0: rect.top,
    y1: rect.bottom,
    w: rect.width,
    h: rect.height,
  };
  return data;
}
```

#### 获取月份第一天和最后一天的时间戳

```javascript
/**
 * @description 获取月份第一天和最后一天的时间戳
 * @param {number} year 年份
 * @param {number} month 月份
 * @returns `{ start: 第一天, end: 最后一天 }`
 */
function getTimestampOfMonth(year, month) {
  var start = new Date(year, month - 1, 1)
  var end = new Date(year, month, 0);
  var time = {
    start: start.getTime(),
    end: end.getTime()
  };
  return time;
}
```

#### 获取坐标下方的元素

```javascript
/**
 * @description 获取坐标下方的元素（从子元素到父元素）
 * @param {number} x 横坐标
 * @param {number} y 纵坐标
 */
function elemsFromPoint(x, y) {

  if (x === undefined || y === undefined) {
    return [];
  }

  x = Math.floor(x);
  y = Math.floor(y);

  let item = document.elementFromPoint(x, y);
  let items = [];

  if (item) {
    items.push(item);
  } else {
    return [];
  }

  while (item.parentElement) {
    item = item.parentElement;
    items.push(item);
  }

  return items;

};
```

#### 计算字符串的字符数

```javascript
/**
 * @description 计算字符串的字符数（数字英文字母 +1，其他 +3）
 * @param   {string} str 被检测的字符串
 * @returns {number} 字符数
 */
function calcChars(str) {
  var reg = /[0-9a-zA-Z]/;
  var sum = 0;
  for (let i in str) {
    if (reg.test(str.charAt(i))) {
      sum += 1;
    } else {
      sum += 3;
    }
  }
  return sum;
}
```

#### 加减法精度

```javascript
/**
 * @description 加减法精度
 * @param   {string} type 类型（plus、sub）
 * @param   {number} [num1] 数值1，默认为 0
 * @param   {number} [num2] 数值2，默认为 0
 * @returns {(number|null)} 返回两个数值相加或相减后的结果
 */
function accPlusAndSub(type, num1 = 0, num2 = 0) {

  var decimalsNum1 = (String(num1).split('.')[1] || '').length;
  var decimalsNum2 = (String(num2).split('.')[1] || '').length;
  var decimalsMax = Math.max(decimalsNum1, decimalsNum2);
  var multiplies = Math.pow(10, decimalsMax);

  if (type === 'plus') {
    return ((num1 * multiplies + num2 * multiplies) / multiplies);
  } else if (type === 'sub') {
    return ((num1 * multiplies - num2 * multiplies) / multiplies);
  } else {
    return null;
  }

}
```

#### 检测用户是否离开页面

```javascript
/**
 * @description 检测用户是否离开页面（一秒检测一次）
 * @param {object}   [options] 配置选项
 * @param {function} [options.onblur]    用户离开页面时的回调函数
 * @param {function} [options.onfocus]   用户返回页面时的回调函数
 * @param {string}   [options.blurDelay] 设定用户离开页面多久后才调用 onblur
 * - 单位为秒
 * - 默认 0
 * @param {string}   [options.timerName] 定时器名称
 * - 用于 setInterval()
 * - 默认 tCheckPageBlur
 */
function checkPageBlur(options) {

  var config = {
    onblur: null,
    onfocus: null,
    blurDelay: 0,
    timerName: 'tCheckPageBlur',
  };

  Object.assign(config, options);

  var timerName = config.timerName; // 定时器名称
  var checkDelay = 0;               // 延时
  var blurTriggered = false;        // 标记状态

  clearInterval(window[timerName]);
  window[timerName] = setInterval(function () {
    var isFocus = document.hasFocus();

    if (isFocus && blurTriggered) {
      // 在页面且触发过 blur
      blurTriggered = false;
      checkDelay = 0;
      try {
        config.onfocus && (config.onfocus());
      } catch (err) {
        console.error('[检测] 回调函数 onfocus 出错\n', err);
      }
    } else if (!isFocus && !blurTriggered) {
      // 不在页面且未触发 blur
      if (checkDelay >= config.blurDelay) {
        blurTriggered = true;
        checkDelay = 0;
        try {
          config.onblur && (config.onblur());
        } catch (err) {
          console.error('[检测] 回调函数 onblur 出错\n', err);
        }
      } else {
        checkDelay += 1;
      }
    }
  }, 1000);

}

// 调用
checkPageBlur({
  onblur: function () {
    console.log('[检测] 用户离开页面');
  },
  onfocus: function () {
    console.log('[检测] 用户返回页面');
  },
});
```

#### 解析 URL 地址的参数（?=...）为一个对象

```javascript
function queriesToObj(url = '') {
  var split = url.split('?')[1];
  var arr = split.split('&');
  var obj = {};

  arr.forEach(function (item) {
    var kv = item.split('=');
    obj[kv[0]] = kv[1];
  });

  return obj;
}
```

#### 矩形碰撞检测

```javascript
/**
 * @description 矩形碰撞检测
 * @param   {Element} elemA        当前元素
 * @param   {Element} elemB        目标元素
 * @param   {boolean} [checkAside] 是否包含边缘碰撞，默认包含
 * @returns {object} `{ error: 是否检测失败, hit: 是否碰撞 }`
 */
function rectColisionCheck(elemA, elemB, checkAside = true) {
  const result = {
    error: false,
    hit: false,
  };

  if (!(elemA && elemB)) {
    console.error('缺少参数');
    result.error = true;
    return result;
  }

  const rectA = elemA.getBoundingClientRect();
  const rectB = elemB.getBoundingClientRect();

  if (checkAside) {
    result.hit = !(
      rectA.bottom < rectB.top ||
      rectA.left > rectB.right ||
      rectA.top > rectB.bottom ||
      rectA.right < rectB.left
    );
  } else {
    result.hit = !(
      rectA.bottom <= rectB.top ||
      rectA.left >= rectB.right ||
      rectA.top >= rectB.bottom ||
      rectA.right <= rectB.left
    );
  }

  return result;
}
```

#### 设置事件对象属性

```javascript
/**
 * @description 设置事件对象属性
 * @param {Eveny}  ev 事件对象
 * @param {object} props 要设置的属性
 */
function setEvProps(ev, props = {}) {
  if (ev) {
    for (let key in props) {
      Object.defineProperty(ev, key, {
        configurable: true,
        enumerable: true,
        get: function () {
          return props[key];
        },
      });
    }
  }
}
```

#### 通过点路径访问对象属性

```javascript
/**
 * @description 通过点路径访问对象属性
 * @param {object} obj
 * @param {string} path
 */
function getObjValue(obj, path = '') {

  if (typeof obj !== 'object') {
    console.error('访问失败，参数 obj 错误！');
    return;
  }

  if (typeof path !== 'string') {
    console.error('访问失败，参数 path 错误！');
    return;
  }

  if (path === '') {
    return obj;
  }

  return path.split('.').reduce((a, b) => {
    return (a === undefined ? a : a[b]);
  }, obj);

}
```

#### 暂停执行代码一段时间

```javascript
/**
 * @description 暂停执行代码一段时间
 * @param   {number} [time] 时长（毫秒），默认 1000
 * @returns {Promise} Promise
 */
function sleep(time = 1000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

await sleep(1000);
```

#### 字符串转文件

```javascript
/**
 * @description 字符串转文件
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

‍
