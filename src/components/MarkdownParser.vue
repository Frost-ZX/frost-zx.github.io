<template>
  <div v-html="mdResult" class="markdown-body"></div>
</template>

<script>
// https://www.npmjs.com/package/github-markdown-css
// https://www.npmjs.com/package/highlight.js
// https://www.npmjs.com/package/markdown-it

import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/common';

import 'github-markdown-css/github-markdown-light.css';

export default {
  name: 'MarkdownParser',
  props: {

    /** Markdown 源内容 */
    mdSrc: {
      type: String,
      default: ''
    },

  },
  data() {
    return {

      /** @type {markdownit} */
      mdInstance: null,

      /** Markdown 转换结果 */
      mdResult: '',

    }
  },
  watch: {

    // 自动渲染
    mdSrc: {
      handler(value) {
        this.render(value);
      }
    },

  },
  mounted() {
    this.initMD();
  },
  methods: {

    /** 初始化实例 */
    initMD() {

      const vm = this;

      /** @type {markdownit.Options} */
      const options = {
        html: true,
        xhtmlOut: true,
        breaks: true,
        langPrefix: 'language-',
        linkify: false,
        highlight: (str, lang) => {

          const tagPrefix = `<pre><code class="hljs language-${lang}">`;
          const tagSuffix = '</code></pre>';

          let content = '';
          let highlighted = false;

          if (lang && hljs.getLanguage(lang)) {
            try {
              // 高亮成功
              content = hljs.highlight(str, {
                language: lang,
                ignoreIllegals: true,
              }).value;
              highlighted = true;
            } catch (error) {
              // 高亮失败
              highlighted = false;
            }
          }

          if (!highlighted) {
            const md = vm.mdInstance;
            content = (md ? md.utils.escapeHtml(str) : '');
          }

          return `${tagPrefix}${content}${tagSuffix}`;

        },
      }

      /** @type {markdownit} */
      const md = new MarkdownIt(options);

      this.mdInstance = md;

    },

    /**
     * @description 渲染内容
     * @param {string} [mdSrc]
     */
    render(mdSrc) {

      const { mdInstance: md } = this;

      if (md) {
        this.mdResult = md.render(mdSrc || this.mdSrc);
      } else {
        console.warn('实例不存在，取消渲染。');
      }

    },

  },
}
</script>

<style lang="less">
.markdown-body {
  margin: 0 auto;
  padding: 2.5rem;
  box-sizing: border-box;
  max-width: 60rem;
  user-select: text;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  img {
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style: disc;
  }
}
</style>

<style>
/*
  https://highlightjs.org/static/demo/
  https://highlightjs.org/static/demo/styles/github.css
*/

/*
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/

pre code.hljs {
  display: block;
  /* padding: 1em; */
  max-height: 80vh;
  overflow: auto;
}

code.hljs {
  padding: 3px 5px;
}

.hljs {
  color: #24292E;
  background: #FFF;
}

.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  color: #D73A49;
}

.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  color: #6F42C1;
}

.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id,
.hljs-variable {
  color: #005CC5;
}

.hljs-meta .hljs-string,
.hljs-regexp,
.hljs-string {
  color: #032F62;
}

.hljs-built_in,
.hljs-symbol {
  color: #E36209;
}

.hljs-code,
.hljs-comment,
.hljs-formula {
  color: #6A737D;
}

.hljs-name,
.hljs-quote,
.hljs-selector-pseudo,
.hljs-selector-tag {
  color: #22863A;
}

.hljs-subst {
  color: #24292E;
}

.hljs-section {
  color: #005CC5;
  font-weight: 700;
}

.hljs-bullet {
  color: #735C0F;
}

.hljs-emphasis {
  color: #24292E;
  font-style: italic;
}

.hljs-strong {
  color: #24292E;
  font-weight: 700;
}

.hljs-addition {
  color: #22863A;
  background-color: #F0FFF4;
}

.hljs-deletion {
  color: #B31D28;
  background-color: #FFEEF0;
}
</style>
