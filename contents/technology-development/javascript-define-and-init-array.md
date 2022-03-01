# 「JavaScript」创建并初始化任意长度的数组

## 直接定义

```javascript
var arr = [0, 0, 0, 0, 0]; // [0, 0, 0, 0, 0]
```

## 使用 push() 方法

```javascript
var arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(0);
}

// [0, 0, 0, 0, 0]
```

## 使用 Array 构造函数和 fill() 方法

```javascript
var arr = new Array(5); // [empty × 5]
    arr.fill(0);        // [0, 0, 0, 0, 0]
```

## 使用 Array 构造函数和数组展开

```javascript
var arr = [...new Array(5)]; // [undefined x 5]
```

```javascript
var arr = [...new Array(5).keys()]; // [0, 1, 2, 3, 4]
```

## 使用 Array.from()

> `Array.from(arrayLike[, mapFn[, thisArg]])`

```javascript
var arr = Array.from({length: 5}); // [undefined x 5]
```

```javascript
var arr = Array.from({length: 5}, () => 0); // [0, 0, 0, 0, 0]
```

```javascript
var arr = Array.from({length: 5}, (v, i) => (i + 1)); // [1, 2, 3, 4, 5]
```
