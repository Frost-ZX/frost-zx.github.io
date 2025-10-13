---
title: "「JavaScript」JSDoc 学习记录"
date: 2025-03-15T23:19:54Z
lastmod: 2025-03-15T23:25:49Z
tags: [JavaScript,Web 前端,学习,记录]
---

# 「JavaScript」JSDoc 学习记录

## 信息

### @deprecated

#### 简介

用于将函数、属性等内容标记为不推荐使用。

#### 参考

- [Use JSDoc: @deprecated](https://jsdoc.app/tags-deprecated.html)
- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#deprecated)

### @description

#### 简介

用于给变量、函数等内容添加说明信息。

#### 语法

```plaintext
@description <说明内容>
@desc <说明内容>
```

#### 参考

- [Use JSDoc: @description](https://jsdoc.app/tags-description.html)

## 类型

### @callback

#### 简介

与 `@typedef` 类似，但它主要用于描述函数。

#### 语法

```javascript
/**
 * @callback ExampleFunction
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */
```

#### 参考

- [Use JSDoc: @callback](https://jsdoc.app/tags-callback.html)
- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param)

### @param

#### 简介

与 `@type` 类似，但它用于描述函数的参数类型。

#### 语法

```javascript
/**
 * @param {Object} options
 * @param {string} options.prop1
 * @param {number} options.prop2
 * @param {number} [options.prop3]
 */
function example(options) {
  return options;
}
```

#### 参考

- [Use JSDoc: @param](https://jsdoc.app/tags-param.html)
- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param)

### @template

#### 示例

```javascript
/**
 * @interface
 * @template TData
 * @typedef  {object}  ResObject
 * @property {number}  code
 * @property {TData}   data
 * @property {string}  message
 * @property {boolean} success
 */

/**
 * @interface
 * @template TData
 * @typedef  ResPromise
 * @type { import('axios').AxiosPromise<ResObject<TData>> }
 */
```

#### 参考

- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#template)

### @type

#### 简介

用于描述对象的类型。

#### 语法

```plaintext
@type {类型名称}
```

**类型名称（名称表达式）**

> 指定一个类型名称。

```plaintext
{boolean}
{number}
{string}
{HTMLElement}
{myNamespace.MyClass}
```

**多个类型**

> 使用括号包括，使用 `|` 分隔多个类型。  
> 表示值可能是几种类型中的一种。

```plaintext
{(boolean|number)}
```

**数组和对象**

> JSDoc 支持 Closure Compiler 语法定义的数组和对象类型。  
> 可以在类型名称的后方添加 `[]`​ 描述数组项的类型。例如 `string[]` 表示字符串数组。  
> 对于具有已知的属性的对象，可以使用 Closure Compiler 语法描述类型。可以分别描述每个属性，以便为每个属性指定更详细的信息。

一个保存 MyClass 实例对象的数组：

```plaintext
{Array.<MyClass>}
{MyClass[]}
```

一个 key 类型为 string，值类型为 number 的对象：

```plaintext
{Object.<string, number>}
```

一个类数组对象：

```plaintext
{Object.<number, object>}
```

一个名称为 `myObj`​，包含属性 `a`​（number）和 `b`（任意类型）的对象：

```plaintext
{{a: number, b: string, c}} myObj

{Object} myObj
{number} myObj.a
{*} myObj.b
```

**导入类型**

> 可以使用 `import` 导入其他文件中的类型。  
> 注意：此语法是特定于 TypeScript 的，不同于 JSDoc 标准。

从文件 `types.js`​ 中导入 `Example` 类型

```plaintext
{ import("./types").Example }
```

#### 参考

- [Use JSDoc: @type](https://jsdoc.app/tags-type.html)
- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#type)

### @typedef

#### 简介

用于描述一个自定义的类型。

#### 语法

```javascript
/**
 * @typedef  {object} ExampleType - 定义一个名称为 ExampleType 的类型
 * @property {string} prop1 - 一个 string 类型的属性
 * @property {number} prop2 - 一个 number 类型的属性
 * @property {number} [prop3] - 一个 number 类型的可选属性
 */
```

#### 参考

- [Use JSDoc: @typedef](https://jsdoc.app/tags-typedef.html)
- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param)

‍
