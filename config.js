var appConfig = {

    httpTimeout: 30000,

    contentList: [
        {
            name: 'default',
            label: '默认',
            items: [
                {
                    name: 'test',
                    title: '测试（Test）',
                    createdAt: '2018-11-11',
                    updatedAt: '2021-10-31'
                },
            ]
        },
        {
            name: 'game-minecraft',
            label: '游戏 / Minecraft',
            items: [
                {
                    name: 'minecraft-custom-sounds-resourcepack',
                    title: '「Minecraft」自定义声音资源包',
                    createdAt: '2020-05-06',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'windows-run-minecraft-with-discrete-graphics-card',
                    title: 'Windows 10 设置独立显卡运行 Minecraft',
                    createdAt: '2020-03-02',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'plotsquared-minecraft-default-generator',
                    title: 'PlotSquared 创建 Minecraft 默认地形的地皮世界',
                    createdAt: '2019-11-03',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'minecraft-in-game-info-xml',
                    title: '「Minecraft」In-Game Info XML 样式',
                    createdAt: '2019-08-29',
                    updatedAt: '2021-08-19'
                },
                {
                    name: 'dynmapforge-warsftbdynmap-compatible',
                    title: '「Minecraft」修改 Dynmap 让 WarsFtbDynmap 能正常使用',
                    createdAt: '2019-05-12',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'translation-universe-guard-2',
                    title: '「Minecraft」UniverseGuard 2 插件部分提示文本汉化',
                    createdAt: '2019-03-15',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'minecraft-java-edition-commands',
                    title: 'Minecraft Java Edition 命令合集',
                    createdAt: '2019-02-20',
                    updatedAt: '2021-09-20'
                },
                {
                    name: 'minecraft-links',
                    title: '「Minecraft」相关链接',
                    createdAt: '2018-09-30',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'tutorial-signpicture',
                    title: '「Minecraft」SignPicture（告示牌图片）教程',
                    createdAt: '2018-07-22',
                    updatedAt: '2021-10-31'
                },
                {
                    name: 'minecraft-java-server-options',
                    title: 'Minecraft Java 版服务端启动参数选项',
                    createdAt: '2018-07-10',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'forge-auto-remove-erroring-entities',
                    title: '「Minecraft」自动修复部分由异常实体或异常方块实体导致的崩溃',
                    createdAt: '2018-05-02',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'minecraft-official-website-login-problem',
                    title: '使用 gooreplacer 插件解决国内在 Minecraft 官网不能登录的问题',
                    createdAt: '2018-02-20',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'minecraft-je-versions',
                    title: 'Minecraft Java Edition 版本记录',
                    createdAt: '2009-05-10',
                    updatedAt: '2021-12-29'
                },
            ]
        },
        {
            name: 'image-text',
            label: '图文',
            items: [
                {
                    name: 'interesting-chinese-sentences',
                    title: '一些有趣的中文句子（中文博大精深）',
                    createdAt: '2019-02-16',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'classical-quotations',
                    title: '经典语录',
                    createdAt: '2018-10-24',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'text-english-sentences',
                    title: '英语句子',
                    createdAt: '2018-05-15',
                    updatedAt: '2021-05-03'
                },
            ]
        },
        {
            name: 'technology-development',
            label: '科技 / 开发',
            items: [
                {
                    name: 'vue-cli-less-global-variables',
                    title: '「Web 前端」Vue CLI 配置 Less 全局变量',
                    createdAt: '2021-07-09',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'javascript-export-ncm-playlist-song-info',
                    title: '「JavaScript」提取（导出）网易云音乐歌单歌曲列表信息为文件',
                    createdAt: '2021-05-03',
                    updatedAt: '2021-09-16'
                },
                {
                    name: 'javascript-define-and-init-array',
                    title: '「JavaScript」创建并初始化任意长度的数组',
                    createdAt: '2021-01-18',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'vue-jsx-syntax',
                    title: '「Vue」在 Vue 中使用 JSX 的语法',
                    createdAt: '2020-09-20',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'javascript-merge-dynmap-images',
                    title: '「JavaScript」将 Dynmap 网页上的地图图片合成为一张图',
                    createdAt: '2020-06-28',
                    updatedAt: '2021-09-12'
                },
                {
                    name: 'html5-filereader-load-file',
                    title: 'HTML5 使用 FileReader 读取并预览文件内容',
                    createdAt: '2019-12-04',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'javascript-snack-game',
                    title: '原生 JavaScript 实现贪吃蛇游戏',
                    createdAt: '2019-10-29',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'jsdoc-learning',
                    title: '「JavaScript」JSDoc 学习记录',
                    createdAt: '2019-09-10',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'npm-yarn-vuecli-common-problems-and-solutions',
                    title: 'NPM、Yarn、Vue CLI 的常见问题以及解决方法',
                    createdAt: '2019-06-12',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'collection-javascript-code',
                    title: '「合集」常用的 JavaScript 代码',
                    createdAt: '2018-11-04',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'useful-css-javascript-libraries',
                    title: '「合集」实用的 CSS / JavaScript 库',
                    createdAt: '2018-11-02',
                    updatedAt: '2022-02-19'
                },
                {
                    name: 'windows-vbs-code',
                    title: '「合集」VBS 代码',
                    createdAt: '2018-10-22',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'description-cors-preflight-request',
                    title: 'CORS 预检请求（preflight request）',
                    createdAt: '2018-09-20',
                    updatedAt: '2021-12-29'
                },
                {
                    name: 'description-date-time-string-format',
                    title: '包含 T 和 Z 的日期时间字符串格式',
                    createdAt: '2018-08-09',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'windows-bat-anti-autorun-virus',
                    title: '「BAT工具」防止病毒在U盘创建AUTORUN文件',
                    createdAt: '2018-02-20',
                    updatedAt: '2021-05-03'
                },
            ]
        },
        {
            name: 'technology-software',
            label: '科技 / 软件',
            items: [
                {
                    name: 'termux-jdk',
                    title: '「教程」在 Termux 中安装任意版本的 JDK',
                    createdAt: '2021-12-11',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'android-rdc-custom-resolution',
                    title: '「教程」Android 微软远程桌面客户端使用自定义分辨率',
                    createdAt: '2021-11-10',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'chromium-dev-tools',
                    title: '浏览器 DevTools（开发人员工具）部分实用功能介绍',
                    createdAt: '2021-10-09',
                    updatedAt: '2021-10-10'
                },
                {
                    name: 'windows-useful-tools',
                    title: 'Windows 实用小工具推荐',
                    createdAt: '2020-11-10',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'coolq-plugin-epk-words',
                    title: '铃心自定义（酷Q插件）自制词库分享',
                    createdAt: '2020-04-07',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'obs-fullscreen-capture-failed',
                    title: '解决 OBS 显示器捕获黑屏的三个方法',
                    createdAt: '2020-02-05',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'mobile-qq-page-links',
                    title: '移动端 QQ & 微信页面链接',
                    createdAt: '2018-10-31',
                    updatedAt: '2021-10-12'
                },
            ]
        },
        {
            name: 'technology-system',
            label: '科技 / 系统',
            items: [
                {
                    name: 'collection-windows-commands',
                    title: '「合集」Windows BAT / CMD 常用命令',
                    createdAt: '2021-11-28',
                    updatedAt: '2022-01-10'
                },
                {
                    name: 'temporarily-set-java-path',
                    title: '临时设置 Java 环境变量（PATH）',
                    createdAt: '2021-02-20',
                    updatedAt: '2021-09-16'
                },
                {
                    name: 'windows-command-forfiles',
                    title: 'Windows FORFILES 命令',
                    createdAt: '2021-02-10',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'linux-ssh-allow-or-deny-user',
                    title: 'Linux 允许或禁止指定用户进行 SSH 登录',
                    createdAt: '2020-10-25',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'elementary-os-5-1-hera-setup-uefi',
                    title: '安装 elementary OS 后没有自动写入 EFI 引导',
                    createdAt: '2020-05-24',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'query-domain-srv-records',
                    title: '在 Linux / Windows 查询域名的 SRV 记录',
                    createdAt: '2020-05-15',
                    updatedAt: '2022-03-01',
                },
                {
                    name: 'ubuntu-20-04-netplan',
                    title: '记一次 Ubuntu 20.04 双网卡配置过程',
                    createdAt: '2020-01-09',
                    updatedAt: '2021-10-09'
                },
                {
                    name: 'windows-10-explorer-ogg-file-lag',
                    title: '解决 Windows 10 资源管理器操作 OGG 文件时未响应的问题',
                    createdAt: '2019-11-05',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'windows-command-prompt-file-checksum',
                    title: 'Windows 通过命令提示符校验文件（MD5、SHA1等）',
                    createdAt: '2019-10-25',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'collection-linux-commands',
                    title: '「合集」Linux 常用命令',
                    createdAt: '2018-12-20',
                    updatedAt: '2021-12-26'
                },
                {
                    name: 'windows-rdp-custom-port-and-60fps',
                    title: '修改 Windows 远程桌面端口以及开启 60FPS',
                    createdAt: '2018-11-15',
                    updatedAt: '2021-11-11'
                },
            ]
        },
        {
            name: 'technology-website',
            label: '科技 / 网站',
            items: [
                {
                    name: 'bilibili-api',
                    title: 'bilibili API',
                    createdAt: '2020-12-16',
                    updatedAt: '2022-02-19',
                    isHide: true
                },
                {
                    name: 'recommend-useful-websites',
                    title: '「推荐」实用网站',
                    createdAt: '2018-11-16',
                    updatedAt: '2021-05-03'
                },
                {
                    name: 'qqpet-html5',
                    title: 'QQ宠物HTML5版',
                    createdAt: '2018-09-30',
                    updatedAt: '2021-10-12'
                },
            ]
        },
    ],

};