---
title: 「Web 前端」在 Vue 中使用 JSX 的语法
date: 2025-03-15T23:05:31Z
lastmod: 2025-10-07T16:10:57Z
tags: [Web 前端,JavaScript,JSX,Vue.js]
---

# 「Web 前端」在 Vue 中使用 JSX 的语法

## 来源

- [GitHub - vuejs/jsx](https://github.com/vuejs/jsx#syntax)

## 语法

### 内容（Content）

```javascript
render() {
  return <p>hello</p>;
}
```

动态内容：

```javascript
render() {
  return <p>hello { this.message }</p>;
}
```

使用自闭合标签：

```javascript
render() {
  return <input />;
}
```

使用组件：

```javascript
import MyComponent from './my-component';

export default {
  render() {
    return <MyComponent>hello</MyComponent>;
  },
}
```

### Attributes / Props

```javascript
render() {
  return <input type="email" />;
}
```

动态绑定：

```javascript
render() {
  return <input
    type="email"
    placeholder={this.placeholderText}
  />;
}
```

使用 “展开” 操作符：

> 传递的对象需要与 [深入数据对象](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1) 相匹配。

```javascript
render() {
  const inputAttrs = {
    type: 'email',
    placeholder: 'Enter your email',
  };
  return <input {...{ attrs: inputAttrs }} />;
}
```

### 插槽（Slots）

具名插槽：

```javascript
render() {
  return (
    <MyComponent>
      <header slot="header">header</header>
      <footer slot="footer">footer</footer>
    </MyComponent>
  );
}
```

作用域插槽：

```javascript
render() {
  const scopedSlots = {
    header: () => <header>header</header>,
    footer: () => <footer>footer</footer>,
  };
  return <MyComponent scopedSlots={scopedSlots} />;
}
```

### 指令（Directives）

```html
<input vModel={this.newTodoText} />
```

使用修饰符（modifier）：

```html
<input vModel_trim={this.newTodoText} />
```

使用参数（argument）：

```html
<input vOn:click={this.newTodoText} />
```

同时使用参数和修饰符：

```html
<input vOn:click_stop_prevent={this.newTodoText} />
```

v-html：

```html
<p domPropsInnerHTML={html} />
```

### 函数式组件（Functional Components）

> [渲染函数 &amp; JSX - 函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)

```javascript
export default ({ props }) => (<p>hello {props.message}</p>);
```

```javascript
const HelloWorld = ({ props }) => (<p>hello {props.message}</p>);
```

‍
