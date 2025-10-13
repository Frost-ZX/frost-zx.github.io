---
title: "Fabric.js 简单介绍和使用"
date: 2025-03-15T22:51:22Z
lastmod: 2025-03-15T22:55:55Z
tags: [Web 前端,JavaScript,Canvas,Fabric.js]
---

# Fabric.js 简单介绍和使用

## 参考资料

- [Fabric.js JSDoc](http://fabricjs.com/docs/)
- [Fabric.js Demos - Event inspector](http://fabricjs.com/events)
- [Fabric.js 从入门到________](https://juejin.cn/post/7026941253845516324)
- [Fabric.js 实用指南](https://blackstarxing.github.io/2019-08-17-fabric-doc.html)

## 简介

Fabric.js 是一个功能强大的 Canvas 库，它在原生 Canvas 之上提供了交互式对象模型、多种易用的 API 和 SVG 解析器等，通过简洁的 API 就可以在画布上进行丰富的操作，并且支持多种的事件方法。

注：本文中使用的 Fabric.js 版本为 v5。

## 常用的对象、属性和方法

### 常用对象

|名称|描述|
| ------| ------------------------------|
|​`ActiveSelection`|选区|
|​`Group`|分组|
|​`Image`|图像|
|​`Line`|线段|
|​`Rect`|矩形|
|​`Text`|文本（不可编辑，不换行）|
|​`IText`|可编辑文本（可编辑，不换行）|
|​`Textbox`|文本框（可编辑，自动换行）|

### 常用属性

|属性|描述|
| ------| ---------------------------------------------|
|​`type`|对象类型|
|​`data`|用于添加自定义的数据|
|​`originX`|对象转换的水平原点（left / center / right）|
|​`originY`|对象转换的垂直原点（top / center / bottom）|
|​`left`|水平坐标|
|​`top`|垂直坐标|
|​`width`|宽度|
|​`height`|高度|
|​`angle`|旋转角度|
|​`scaleX`|水平方向缩放倍数|
|​`scaleY`|垂直方向缩放倍数|
|​`stroke`|线段颜色|
|​`strokeWidth`|线段宽度|
|​`fill`|填充颜色|
|​`fontFamily`|文本字体名称|
|​`fontSize`|文本字体大小|
|​`opacity`|对象的不透明度|
|​`borderColor`|选区边框颜色|
|​`borderDashArray`|选区边框虚线样式|
|​`borderOpacityWhenMoving`|选区拖拽时的边框透明度|
|​`cornerColor`|选区 “操作点” 填充颜色|
|​`cornerSize`|选区 “操作点” 大小|
|​`cornerStrokeColor`|选区 “操作点” 描边颜色|
|​`cornerStyle`|选区 “操作点” 样式（circle / rect）|
|​`transparentCorners`|选区 “操作点” 中心是否透明（只有描边）|
|​`hasControls`|是否有 “操作点”|
|​`lockRotation`|是否禁止旋转对象|
|​`lockMovementX`|是否禁止水平移动对象|
|​`lockMovementY`|是否禁止垂直移动对象|
|​`lockScaleX`|是否禁止水平缩放对象|
|​`lockScaleY`|是否禁止垂直缩放对象|
|​`selectable`|是否可以被选中|
|​`hoverCursor`|光标在对象上方时的样式（子对象优先）|
|​`moveCursor`|光标在可移动对象上方时的样式（子对象优先）|

### 常用方法

#### 画布（Canvas）

|方法|描述|
| ------| ------------------------------------|
|​`add(...object)`|添加对象到画布|
|​`insertAt(object, index, nonSplicing)`|添加对象到画布指定层级|
|​`moveTo(object, index)`|更改对象所在的层级|
|​`remove(...object)`|移除画布上的对象|
|​`discardActiveObject()`|取消选中对象|
|​`getActiveObject()`|获取选中的对象|
|​`setActiveObject()`|更改选中的对象|
|​`getPointer()`|传递事件对象，获取相对于画布的坐标|
|​`fire()`|触发画布事件|
|​`forEachObject()`|遍历画布上的对象|
|​`getZoom()`|获取画布缩放比例|
|​`setZoom()`|设置画布缩放比例|
|​`on()`|监听画布事件|
|​`requestRenderAll()`|刷新画布|
|​`set()`|设置画布属性|

#### 对象（Object）

|方法|描述|
| ------| ------------------------------|
|​`bringToFront()`|改变对象层级，置顶|
|​`bringForward()`|改变对象层级，上移|
|​`sendBackwards()`|改变对象层级，下移|
|​`sendToBack()`|改变对象层级，置底|
|​`intersectsWithObject()`|检测两个对象是否相交（重叠）|
|​`isContainedWithinObject()`|检测对象是在另外一个对象内|
|​`on()`|监听对象事件|
|​`set()`|设置对象属性|
|​`toDataURL()`|转换为 Base64|

## 创建对象

### 画布

```javascript
let canvas = new fabric.Canvas({
  // 画布宽度
  width: 800,
  // 画布高度
  height: 480,
  // 背景颜色
  backgroundColor: '#FFFFFF',
  // 激活对象时不将对象置顶
  preserveObjectStacking: true,
  // 选区框样式
  selectionBorderColor: '#4CAF50',
  selectionColor: '#4CAF5040',
  selectionFullyContained: true,
  selectionLineWidth: 1,
  // 关闭按比例缩放
  uniformScaling: false,
  // 其他配置选项
  ...
});
```

### 矩形

```javascript
// 创建对象
let el = new fabric.Rect({
  left: 100,   // 相对于画布左侧的距离
  top: 100,    // 相对于画布顶部的距离
  width: 200,  // 对象宽度 100px
  height: 100, // 对象高度 100px
  fill: '#FFFFFF',   // 填充颜色
  stroke: '#1E88E5', // 边框颜色
  strokeWidth: 2,    // 边框粗细
});
// 添加对象
canvas.add(el);
```

### 线段

```javascript
// 创建对象
let el = new fabric.Line([
  100, 100, // 起始点坐标
  200, 100, // 结束点坐标
], {
  stroke: '#1E88E5', // 线段颜色
  strokeWidth: 2,    // 线段粗细
});
// 添加对象
canvas.add(el);
```

```javascript
// 创建对象
let el = new fabric.Line([], {
  stroke: '#1E88E5',
  strokeWidth: 2,
});
// 设置位置和长度
el.set({
  left: 100,
  top: 100,
  width: 100,
  // 注：因为是线段，高度为 0
  height: 0,
});
// 添加对象
canvas.add(el);
```

### 图片

```javascript
let img = new Image();

// 监听图片加载，加载完成后再添加对象
img.onload = function() {
  // 创建对象
  let el = new fabric.Image(img, {
    top: 100,
    left: 100,
    width: 200,
    height: 150,
  });
  // 添加对象
  canvas.add(el);
};
// 设置 crossorigin 属性，开启 CORS 校验
//   若不设置，无法将画布或画布上的对象导出为图片。
//   值设置为 anonymous，表示对此元素的 CORS 请求将不设置凭据标志。
img.setAttribute('crossorigin', 'anonymous');
// 设置图片地址
img.setAttribute('src', 'http://fabricjs.com/assets/69.svg');
```

### 文本框

```javascript
// 创建对象
let el = new fabric.Textbox('文本内容', {
  top: 100,
  left: 100,
  // 设置宽度后，文本内容超出宽度后会自动换行。
  // 注意：文本只会在空格处自动换行。
  // 高度为自适应，不需要设置。
  width: 200,
});
// 添加对象
canvas.add(el);
```

## 场景和实现方法

### 画布内容撤销、恢复

主要通过 Fabric.js 画布对象的 `toObject()`​ 和 `loadFromJSON()` 方法实现。

为了提高性能，默认情况下 `toObject()`​ 只会导出对象上**常用**的属性，其他属性（例如 `data`​、`selectable`​）不会被导出，需要手动在其 `propertiesToInclude`​ 参数中指定（例如 `canvas.toObject(['data', 'selectable'])`）。

### 画布内容导出为图片

将画布（显示区域）或对象导出为图片：

```javascript
toDataURL(options)
```

参数：options（可选）

|属性名|数据类型|默认值|简介|
| ---------------------| ----------| --------| -----------------------------------------|
|format|String|png|导出图片的格式，可选值：jpeg、png|
|quality|Number|1|图片质量（0 \~ 1），仅 jpeg 格式可用|
|multiplier|Number|1|缩放比例|
|left|Number||裁剪左偏移量（1.2.14+）|
|top|Number||裁剪上偏移量（1.2.14+）|
|width|Number||裁剪宽度（1.2.14+）|
|height|Number||裁剪高度（1.2.14+）|
|enableRetinaScaling|Boolean||为克隆图像启用 Retina 缩放（2.0.0+）|

用法示例：

```javascript
let dataURL = canvas.toDataURL({
  format: 'jpeg',
  quality: 0.8,
});
```

```javascript
let dataURL = rect.toDataURL({
  format: 'png',
});
```

注意：

若导出的对象中包含使用 URL（非 DataURL）加载的图片对象，需要使用 `crossOrigin` 属性解决资源跨域问题，否则会出现以下错误提示：

```plaintext
The canvas has been tainted by cross-origin data.
```

其中一种解决方式是先使用 `new Image()`​ 设置 `crossorigin`​ 属性，加载图片，再创建 `fabric.Image` 对象（参考 “创建对象 - 图片”）。

### 画布自适应父 DOM 元素宽高

#### 方案一：监听浏览器窗口大小变化事件

```javascript
// 父元素（DOM）
let el = vm.$el;
// 画布对象
let canvas = vm.canvasInstance;
// 防抖定时器
let debounce = null;

// 事件处理函数
const handler = function () {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    if (canvas) {
      // 设置宽高
      canvas.setWidth(el.clientWidth);
      canvas.setHeight(el.clientHeight);
      // 刷新画布（正常情况下设置宽高后会自动刷新）
      // canvas.requestRenderAll();
    } else {
      console.error('处理失败，画布对象不存在！');
    }
  }, 500);
};

// 添加事件监听
window.addEventListener('resize', handler);

// 移除事件监听
window.removeEventListener('resize', handler);
clearTimeout(debounce);
```

#### 方案二：使用 ResizeObserver 监听 DOM 元素大小更改

参考资料：[ResizeObserver - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)

方案优点：在窗口大小不变化的情况下也能实现自适应

```javascript
// 父元素（DOM）
let el = vm.$el;
// 画布对象
let canvas = vm.canvasInstance;
// 防抖定时器
let debounce = null;

/**
 * @desc 观察器回调函数
 * @type {ResizeObserverCallback}
 */
const handler = function (entries) {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const entry = entries[0];

    if (canvas && entry) {
      const { width, height } = entry.contentRect;
      // 设置宽高
      canvas.setWidth(width);
      canvas.setHeight(height);
      // 刷新画布（正常情况下设置宽高后会自动刷新）
      // canvas.requestRenderAll();
    } else {
      console.error('处理失败，Canvas 或 ResizeObserverEntry 不存在！');
    }
  }, 500);
};

/**
 * @desc 观察器配置选项
 * @type {ResizeObserverOptions}
 */
const options = {
  // 设置观察器以哪种盒子模型来观察变化
  //   可选值：content-box（默认）、border-box、device-pixel-content-box
  box: 'border-box',
};

// 创建观察器，并传递回调函数
const observer = new ResizeObserver(handler);

// 传递配置选项
observer.observe(el, options);

// 停止观察器
observer.disconnect();
clearTimeout(debounce);
```

### 解决画布缩放后，对象显示模糊

把对象的 `objectCaching`​ 属性设置为 `false`，关闭缓存即可。

例如：

```javascript
const rect = new fabric.Rect({
  left: 100,
  top: 100,
  width: 200,
  height: 200,
  fill: '#FFFFFF',
  stroke: '#66CCFF',
  strokeWidth: 2,
  objectCaching: false,
});

canvas.add(rect);
```

注意：不建议大量使用，以免影响性能。

### 实现对象溢出隐藏（裁剪）效果

主要用到了 `clipPath` 功能，设置对象的裁剪路径。

```javascript
// 创建用于作为“容器”的对象
const container = new fabric.Rect({
  left: 0,
  top: 0,
  width: 800,
  height: 480,
  fill: '#FFFFFF',
  stroke: '#000000',
  strokeWidth: 2,
  // 将该属性设置为 true 后，裁剪的区域会动态更新
  absolutePositioned: true,
});

// 创建子对象
const item = new fabric.Rect({
  left: 100,
  top: 100,
  width: 200,
  height: 100,
  fill: '#FFFFFF',
  stroke: '#66CCFF',
  strokeWidth: 2,
  // 将 container 对象设为该对象的 clipPath
  clipPath: container,
});
```

**关于** **​`absolutePositioned`​**​ **属性：**

仅当对象作为 `clipPath`​ 使用时才有意义。如果为 `true`​，`clipPath`​ 的位置将会相对于画布，且不受对象变换影响。（[JSDoc: Class: Object#absolutePositioned](http://fabricjs.com/docs/fabric.Object.html#absolutePositioned)）

**注意：**

后续通过 `.set()`​ 更新对象的 `clipPath`​ 属性时，建议同时将其 `dirty`​ 属性设置为 `true`​，以便清除缓存，防止裁剪区域没有更新。（[JSDoc: Class: Object#dirty](http://fabricjs.com/docs/fabric.Object.html#dirty)）

```javascript
item.set({ clipPath: null, dirty: true });
```

### 鼠标滚轮缩放画布

主要用到了画布的鼠标事件（`mouse:wheel`​）以及调用画布的 `zoomToPoint()` 方法改变视图缩放。

```javascript
// 监听事件：鼠标滚轮
canvas.on('mouse:wheel', function (ev) {

  const evt = ev.e;
  const cursorX = evt.offsetX;
  const cursorY = evt.offsetY;

  // 若按下 Ctrl 键，则为缩放
  if (evt.ctrlKey) {
    evt.preventDefault();
  } else {
    return;
  }

  // 若按下 Alt 键，则为重置缩放
  if (evt.altKey) {
    canvas.zoomToPoint({
      x: cursorX,
      y: cursorY,
    }, 1);
    return;
  }

  // 正数：向下滚动
  // 负数：向上滚动
  const delta = evt.deltaY;

  // 画布当前缩放值
  let zoom = canvas.getZoom();
  let min = 0.1;
  let max = 10;

  zoom += zoom * (delta > 0 ? -0.2 : 0.2);

  // 限制缩放范围
  (zoom < min) && (zoom = min);
  (zoom > max) && (zoom = max);

  // 设置画布缩放比例
  // 参数1：将画布的缩放点设置为鼠标当前位置
  // 参数2：传入缩放值
  canvas.zoomToPoint({
    x: cursorX,
    y: cursorY,
  }, zoom);

});
```

### 鼠标拖拽移动画布

主要用到了画布的鼠标事件（`mouse:down`​、`mouse:move`​ 和 `mouse:up`​）以及调用画布的 `setViewportTransform()` 方法改变视图偏移量。

注意：在拖拽前，若鼠标选中了对象，需要将对象的 `lockMovementX`​ 和 `lockMovementY`​ 属性设置为 `true`，锁定对象的移动，否则拖拽后对象的位置会变化。

```javascript
// 监听事件：鼠标按下
canvas.on('mouse:down', function ({ e: evt, target }) {

  // 仅在按下了 Ctrl 键时为拖拽画布
  if (!evt.ctrlKey) {
    return;
  }

  if (target) {
    if (target.lockMovementX || target.lockMovementY) {
      // 记录原始锁定状态
      target.isLock = true;
    } else {
      // 记录原始锁定状态
      target.isLock = false;
      // 锁定对象的移动
      target.set({
        lockMovementX: true,
        lockMovementY: true,
      });
    }
  }

  canvas.set({
    // 关闭选区框
    selection: false,
    // 自定义属性，标记拖拽状态
    isDragCanvas: true,
    // 自定义属性，记录起始位置
    startPosX: evt.clientX,
    startPosY: evt.clientY,
    startVpt: [...canvas.viewportTransform],
  });

});

// 监听事件：鼠标移动
canvas.on('mouse:move', function (ev) {
  // 检测是否为拖拽画布模式
  if (canvas.isDragCanvas) {
    const evt = ev.e;
    const vptOld = canvas.startVpt;
    const vptNew = [...vptOld];

    // 计算新的偏移量
    vptNew[4] += (evt.clientX - canvas.startPosX);
    vptNew[5] += (evt.clientY - canvas.startPosY);

    // 更新视图偏移量
    canvas.setViewportTransform(vptNew);
  }
});

// 监听事件：鼠标松开
canvas.on('mouse:up', function ({ target }) {
  // 解锁对象的移动（如果可以）
  if (target && !target.isLock) {
    target.set({
      lockMovementX: false,
      lockMovementY: false,
    });
  }
  // 更新画布属性
  canvas.set({
    // 开启选区框
    selection: true,
    // 自定义属性，标记拖拽状态
    isDragCanvas: false,
  });
});
```

### 鼠标事件中获取分组（Group）内的目标对象

默认情况下，对于分组，`ev.target` 只能获取到整个分组，并不能具体到其中的对象。

在创建分组时，将 `subTargetCheck`​ 属性设置为 `true`​，即可通过 `ev.subTargets` 获取触发事件时的子对象。

对于支持该功能的事件（`mouse:down`​、`mouse:up`​、`mouse:move`​ 等），该属性为 `fabric.Object` 数组；

对于不支持该功能的事件，该属性为 `undefined`。

例如：

```javascript
const group = new fabric.Group([obj1, obj2], {
  subTargetCheck: true,
  ...
});

canvas.add(group);

canvas.on('mouse:down', function (ev) {
  console.log(ev.subTargets);
});
```

### 文本框强制自动换行

Fabeic.js 的文本框对象（Textbox）默认支持文本自动换行，但只能在**空格**处换行，对于类似中文句子这种不带空格的字符串并不会换行，且文本框的宽度会自动被撑开。

在 Fabric.js 2.6.0 版本中，新增了一个 `splitByGrapheme`​ 属性，将其设置为 `true`​ 即可启用在任意字符之间自动换行（参考：[JSDoc: Global](http://fabricjs.com/docs/global.html#splitByGrapheme)），例如：

```javascript
const textbox = new fabric.Textbox('文本框', {
  left: 100,
  top: 100,
  width: 200,
  splitByGrapheme: true,
});

canvas.add(textbox);
```

### 选中并聚焦对象（将对象置于视图的中心）

```javascript
// 获取对象的中心点坐标
//   坐标值相对于画布左上角起始点
//   坐标值不受缩放比例影响
const {
  x: elCenterX,
  y: elCenterY,
} = el.getCenterPoint();

// 获取画布当前的缩放比例
const zoom = canvas.getZoom();

// 计算新的视图坐标
//   中心点坐标值需要与画布缩放比例相乘，与视图统一
//   画布坐标的起始点在左上角，坐标值需要减去画布宽高的一半
const point = {
  x: elCenterX * zoom - canvas.width / 2,
  y: elCenterY * zoom - canvas.height / 2,
};

// 移动视图
canvas.absolutePan(point);
// 选中对象
canvas.setActiveObject(el);
```

### 选中多个对象，创建选区

主要用到了 Fabric.js 的 `ActiveSelection` 对象，手动创建选区：

```javascript
// 画布对象
const canvas = this.canvasInstance;

// 选区中包含的对象
const items = [a, b, c, ...];

// 新建一个选区对象
const sel = new fabric.ActiveSelection(items, {
  // 选区所属的画布
  //   必须包含该参数，否则会出现奇怪的问题（不会报错）
  canvas,
  // 其他配置选项，例如：
  //  borderColor,
  //  borderDashArray,
  //  opacity,
  //  hasControls,
  ...
});

// 使选区生效
canvas.setActiveObject(sel);
```

‍
