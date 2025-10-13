---
title: "解决 ESLint 提示“Parsing error: Unexpected token <”的问题"
date: 2025-03-09T22:32:22Z
lastmod: 2025-10-12T18:14:59Z
tags: [开发,Web 前端,JavaScript,配置]
---

# 解决 ESLint 提示“Parsing error: Unexpected token <”的问题

## 参考资料

- [error Parsing error: Unexpected token &lt; · Issue #447 · jsx-eslint/eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react/issues/447)

## 解决方法

修改 ESLint 配置文件（`.eslintrc.js`）：

```json
"parserOptions": {
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
}
```

‍
