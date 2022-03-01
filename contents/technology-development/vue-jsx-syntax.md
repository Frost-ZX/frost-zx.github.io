# 「Vue」在 Vue 中使用 JSX 的语法

## 来源

- [GitHub - vuejs/jsx](https://github.com/vuejs/jsx#syntax)

## 语法

### 内容（Content）

```jsx
render() {
  return <p>hello</p>;
}
```

动态内容：

```jsx
render() {
  return <p>hello { this.message }</p>;
}
```

使用自闭合标签：

```jsx
render() {
  return <input />;
}
```

使用组件：

```jsx
import MyComponent from './my-component';

export default {
  render() {
    return <MyComponent>hello</MyComponent>;
  },
}
```

### Attributes / Props

```jsx
render() {
  return <input type="email" />;
}
```

动态绑定：

```jsx
render() {
  return <input
    type="email"
    placeholder={this.placeholderText}
  />;
}
```

使用“展开”操作符：

> 传递的对象需要与 [深入数据对象](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象) 相匹配。

```jsx
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

```jsx
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

```jsx
render() {
  const scopedSlots = {
    header: () => <header>header</header>,
    footer: () => <footer>footer</footer>,
  };
  return <MyComponent scopedSlots={scopedSlots} />;
}
```

### 指令（Directives）

```jsx
<input vModel={this.newTodoText} />
```

使用修饰符（modifier）：

```jsx
<input vModel_trim={this.newTodoText} />
```

使用参数（argument）：

```jsx
<input vOn:click={this.newTodoText} />
```

同时使用参数和修饰符：

```jsx
<input vOn:click_stop_prevent={this.newTodoText} />
```

v-html：

```jsx
<p domPropsInnerHTML={html} />
```

### 函数式组件（Functional Components）

> [渲染函数 & JSX - 函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#函数式组件)

```jsx
export default ({ props }) => (<p>hello {props.message}</p>);
```

```jsx
const HelloWorld = ({ props }) => (<p>hello {props.message}</p>);
```
