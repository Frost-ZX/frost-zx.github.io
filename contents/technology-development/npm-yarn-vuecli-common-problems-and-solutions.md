# NPM、Yarn、Vue CLI 的常见问题以及解决方法

#### 设置淘宝镜像

- NPM

  ```text
  npm config set registry https://registry.npm.taobao.org
  ```

- Yarn

  ```text
  yarn config set registry https://registry.npm.taobao.org
  ```

#### Electron 打包时卡在 Downloading electron-***.zip

由于网络问题，Electron 打包时可能会一直处于类似 `Downloading electron-v0.37.2-win32-x64.zip` 的状态，可以通过将 Electron 镜像设置为淘宝镜像解决：

```text
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
```

#### Vue CLI，编译 Less / Sass / Scss 时提示 this.getOptions is not a function

`less-loader` 或 `sass-loader` 的版本过高，不兼容，需要降级。

对于 Less：

1. 执行 `npm uninstall less-loader` 卸载已有版本。
2. 执行 `npm install less-loader@5.0.0 -D` 安装低版本的 `less-loader`。

对于 Sass / Scss：

1. 执行 `npm uninstall sass-loader` 卸载已有版本。
2. 执行 `npm install sass-loader@8.0.2 -D` 安装低版本的 `sass-loader`。

#### 使用 vue init 命令创建 electron-vue 模板项目时一直处于 downloading template 状态

使用 `vue init simulatedgreg/electron-vue` 命令创建 electron-vue 模板项目时一直处于 `downloading template` 状态。

可能的原因：使用 `vue init` 创建项目时，默认从 GitHub 下载模板，而且还会把 `.vue-templates` 目录下已经下载过的 `simulatedgreg-electron-vue` 模板目录删除，隐藏在网络不好的情况下会一直 `downloading template`。

解决办法：下载 [SimulatedGREG/electron-vue](https://github.com/SimulatedGREG/electron-vue/) 到本地，解压放入 `C:\Users\用户名\.vue-templates`，文件夹名称为 `simulatedgreg-electron-vue`。

然后执行 `vue init simulatedgreg/electron-vue` 时增加一个参数 `--offline`，否则会重新下载：

```bash
vue init simulatedgreg/electron-vue 项目名称 --offline
```
