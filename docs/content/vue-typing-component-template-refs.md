---
title: "「Web 前端」Vue 为组件模板引用标注类型"
date: 2025-03-09T22:30:29Z
lastmod: 2025-10-12T18:27:37Z
tags: [Web 前端,Vue.js,JavaScript,TypeScript]
---

# 「Web 前端」Vue 为组件模板引用标注类型

## 参考资料

- [TypeScript 与组合式 API - Vue.js](https://cn.vuejs.org/guide/typescript/composition-api#typing-component-template-refs)

## 操作方式

为了获取 `MyModal`​ 的类型，我们首先需要通过 `typeof`​ 得到其类型，再使用 TypeScript 内置的 `InstanceType` 工具类型来获取其实例类型：

```html
<script setup lang="ts">
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

const openModal = () => {
  modal.value?.open()
}
</script>
```

注意，如果你想在 TypeScript 文件而不是在 Vue SFC 中使用这种技巧，需要开启 Volar 的 Takeover 模式。

如果组件的具体类型无法获得，或者你并不关心组件的具体类型，那么可以使用 `ComponentPublicInstance`​。这只会包含所有组件都共享的属性，比如 `$el`。

```html
<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const child = ref<ComponentPublicInstance | null>(null)
</script>
```

‍
