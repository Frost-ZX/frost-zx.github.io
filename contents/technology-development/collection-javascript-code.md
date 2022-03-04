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
var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
    try {
        iframes[i].contentDocument.body.contentEditable = 'true';
        iframes[i].contentDocument.designMode = 'on';
    } catch (err) {
        console.log(err);
    }
}
```

**关闭**

```javascript
document.body.contentEditable = 'false';
document.designMode = 'off';
```

```javascript
var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
    try {
        iframes[i].contentDocument.body.contentEditable = 'false';
        iframes[i].contentDocument.designMode = 'off';
    } catch (err) {
        console.log(err);
    }
}
```

---

## function

#### 查找元素的 Vue 对象

```javascript
/**
 * @typedef {object} FunctionResult
 * @property {boolean} state 查找状态，成功：true，失败：false
 * @property {HTMLElement} element Vue 对象所在的元素
 * @property {object} data 找到的 Vue 对象
 * @property {object[]} parents 父 Vue 对象
 */

/**
 * @description 查找元素的 Vue 对象
 * @param {HTMLElement} el 需要查找的元素
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

#### 查找字符 `tChar` 在 `str` 中第 `num` 次出现的位置

```javascript
function findChar(str, tChar, num) {
    var charPos = str.indexOf(tChar);
    num = num - 1;
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            charPos = str.indexOf(tChar, charPos + 1);
        }
    }
    return charPos;
}
```

#### 格式化时间

```javascript
/**
  * 格式化时间
  * 
  * @param {(number|string|Object)} [time] 要格式化的时间（默认当前）
  * @param {string} [format] 需要的格式（默认 yyyy-mm-dd hh:ii:ss）
  * 
  * @returns {string} 格式化后的时间
  */
function formatTime(time, format) {
    time = time || new Date();
    format = format || 'yyyy-mm-dd hh:ii:ss';

    var timeType = typeof time;
    var timeObj;

    if (timeType == 'number' || timeType == 'string') {
        timeObj = new Date(time);
    } else if (timeType == 'object') {
        timeObj = time;
    }

    // 时间信息
    var timeInfo = {
        // 年月日
        y: timeObj.getFullYear(),
        m: timeObj.getMonth() + 1,
        d: timeObj.getDate(),
        // 时分秒
        h: timeObj.getHours(),
        i: timeObj.getMinutes(),
        s: timeObj.getSeconds()
    };
    // 格式占位符正则
    var formatReg = {
        y: /y+/g,
        m: /m+/g,
        d: /d+/g,
        h: /h+/g,
        i: /i+/g,
        s: /s+/g
    };

    for (let key in formatReg) {
        // 正则匹配
        var matchResult = format.match(formatReg[key]);
        // 获取对应的时间
        var timeResult = timeInfo[key];

        // 无匹配结果
        if (!matchResult) {
            continue;
        }

        // 根据匹配结果（位数）进行替换
        matchResult.forEach(function (value) {
            var result = String(timeResult);

            // 长度不足，补零
            if (result.length < value.length) {
                result = String(Math.pow(10, value.length - result.length)).substr(1) + result;
            }

            // 替换
            format = format.replace(value, result);
        });
    }

    return format;
}
```

#### 获取随机的十六进制色

```javascript
/**
 * 获取随机的十六进制色
 */
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

#### 获取元素边界信息

```javascript
/**
 * 获取元素边界信息  
 * 注：当前元素必须在父元素内
 * 
 * @param {Element} elem 当前元素
 * @param {Element} parent 父元素
 * 
 * @returns {object} `{ elem: {}, parent: {}, dTop, dBottom, dLeft, dRight }`
 */
function getBoundaryInfo(elem, parent) {
    if (!elem || !parent) {
        console.error('[获取边界信息] 缺少参数');
        return {};
    }

    var data = {};
    var rectElem = elem.getBoundingClientRect();
    var rectParent = parent.getBoundingClientRect();

    // 当前元素四角坐标和宽高
    data.elem = {
        x0: rectElem.left,
        x1: rectElem.right,
        y0: rectElem.top,
        y1: rectElem.bottom,
        w: rectElem.width,
        h: rectElem.height,
    };

    // 父元素四角坐标
    data.parent = {
        x0: rectParent.left,
        x1: rectParent.right,
        y0: rectParent.top,
        y1: rectParent.bottom,
        w: rectParent.width,
        h: rectParent.height,
    };

    // 距离
    data.dTop = data.elem.y0 - data.parent.y0;
    data.dBottom = data.parent.y1 - data.elem.y1;
    data.dLeft = data.elem.x0 - data.parent.x0;
    data.dRight = data.parent.x1 - data.elem.x1;

    return data;
}
```

#### 获取元素的坐标信息

```javascript
/**
 * 获取元素的坐标信息（四个角以及宽高）
 * 
 * @param {Element} elem 元素
 * @returns {object} `{ x0, x1, y0, y1, w, h }`
 */
function getElemPosInfo(elem) {
    if (!elem) {
        console.error('[获取坐标信息] 未知元素');
        return;
    }

    var rect = elem.getBoundingClientRect();
    var data = {
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
 * 获取月份第一天和最后一天的时间戳
 * 
 * @param {number} year 年份
 * @param {number} month 月份
 * 
 * @returns {Object} { start: 第一天, end: 最后一天 }
 */
function getTimestampOfMonth(year, month) {
    var start = new Date(year, month - 1, 1)
    var end = new Date(year, month, 0);
    var Timestamp = {
        start: start.getTime(),
        end: end.getTime()
    };

    return Timestamp;
}
```

#### 获取坐标下方的元素

```javascript
/**
 * 获取坐标下方的元素（从子元素到父元素）  
 * 
 * @param {number} x 横坐标
 * @param {number} y 纵坐标
 */
function elemsFromPoint(x, y) {
    if (x == undefined || y == undefined) {
        return [];
    }

    x = Math.floor(x);
    y = Math.floor(y);

    var elem = document.elementFromPoint(x, y);
    var elems = [elem];

    while (elem.parentElement != null) {
        elem = elem.parentElement;
        elems.push(elem);
    }

    return elems;
};
```

#### 计算字符串的字符数

```javascript
/**
 * 计算字符串的字符数（数字英文字母 +1，其他 +3）
 * 
 * @param {string} str 被检测的字符串
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
 * 加减法精度
 * 
 * @param {string} type 类型（plus、sub）
 * @param {number} [num1] 数值1，默认为 0
 * @param {number} [num2] 数值2，默认为 0
 * 
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
 * 检测用户是否离开页面（一秒检测一次）
 * 
 * @param {object} [options] 选项
 * @param {function} [options.onblur] 用户离开页面时的回调函数
 * @param {function} [options.onfocus] 用户返回页面时的回调函数
 * @param {string} [options.blurDelay] 设定用户离开页面多久后才调用 onblur()，单位为秒，默认 0
 * @param {string} [options.timerName] 定时器名称（用于 setInterval()，默认 tCheckPageBlur）
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
function paramToObj(url) {
    var param = url.split('?')[1];
    var paramArr = param.split('&');
    var paramObj = {};

    paramArr.forEach(function (item) {
        var kv = item.split('=');

        paramObj[kv[0]] = kv[1];
    });

    return paramObj;
}
```

#### 矩形碰撞检测

```javascript
/**
 * 矩形碰撞检测
 * 
 * @param {Element} elemA 当前元素
 * @param {Element} elemB 目标元素
 * @param {boolean} [checkAside] 是否包含边缘碰撞，默认包含
 * 
 * @returns {object} `{ error: 是否检测失败, hit: 是否碰撞 }`
 */
function rec
   lisionCheck(elemA, elemB, checkAside = true) {
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
 * 设置事件对象属性
 * 
 * @param {object} ev 事件对象
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

#### 暂停执行代码一段时间

```javascript
/**
 * 暂停执行代码一段时间  
 * 注：调用时需要添加 `await`
 * 
 * @param {number} [time] 时长（毫秒），默认 1000
 * @returns {Promise} Promise
 */
function sleep(time = 1000) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
```

#### 字符串转文件

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
