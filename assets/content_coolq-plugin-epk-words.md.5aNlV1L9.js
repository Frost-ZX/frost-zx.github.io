import{_ as s,c as n,o as l,ah as t}from"./chunks/framework.ByubJJ5I.js";const g=JSON.parse('{"title":"铃心自定义（酷Q插件）自制词库分享","description":"","frontmatter":{"title":"铃心自定义（酷Q插件）自制词库分享","date":"2025-10-15T22:32:29.000Z","lastmod":"2025-10-15T22:34:10.000Z","tags":["QQ","分享"]},"headers":[],"relativePath":"content/coolq-plugin-epk-words.md","filePath":"content/coolq-plugin-epk-words.md"}'),e={name:"content/coolq-plugin-epk-words.md"};function i(p,a,c,d,r,h){return l(),n("div",null,[...a[0]||(a[0]=[t(`<h1 id="铃心自定义-酷q插件-自制词库分享" tabindex="-1">铃心自定义（酷Q插件）自制词库分享 <a class="header-anchor" href="#铃心自定义-酷q插件-自制词库分享" aria-label="Permalink to “铃心自定义（酷Q插件）自制词库分享”">​</a></h1><blockquote><p>插件地址：<code>https://cqp.cc/t/46400</code>（已失效）</p><p>插件版本：3.3.4</p><p>词库制作：Frost-ZX</p><p>词库状态：停止更新（2020-08-02）</p><p>注意事项：</p><p>根据需要可自行添加 <code>【回复间隔[秒数]】</code>​（例： <code>【回复间隔20】</code>）</p><p>配置文件编码为 <code>GB2132</code></p></blockquote><h2 id="获取-minecraft-国际版正版-uuid" tabindex="-1">获取 Minecraft 国际版正版 UUID <a class="header-anchor" href="#获取-minecraft-国际版正版-uuid" aria-label="Permalink to “获取 Minecraft 国际版正版 UUID”">​</a></h2><h3 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to “更新”">​</a></h3><ul><li>2020-05-03</li></ul><h3 id="关键词" tabindex="-1">关键词 <a class="header-anchor" href="#关键词" aria-label="Permalink to “关键词”">​</a></h3><ul><li>​<code>MCUUID+ID</code></li><li>前缀匹配</li><li>可自定义前缀</li><li>例：<code>MCUUIDFrost_ZX</code></li></ul><h3 id="回复内容" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容" aria-label="Permalink to “回复内容”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【赋值变量ID&gt;=&lt;【内容】】</span></span>
<span class="line"><span>【赋值变量URL&gt;=&lt;https://api.mojang.com/users/profiles/minecraft/【变量ID】】</span></span>
<span class="line"><span>【赋值变量Source&gt;=&lt;【访问-UTF【变量URL】】】</span></span>
<span class="line"><span>【赋值变量Source&gt;=&lt;【判空【变量Source】&gt;=&lt;{&quot;id&quot;:&quot;不存在&quot;}】】</span></span>
<span class="line"><span>【变量ID】 的 UUID：【Json解析【变量Source】&gt;=&lt;id&gt;=&lt;[取出所有]&gt;=&lt;&gt;=&lt;】</span></span></code></pre></div><h2 id="今日事件" tabindex="-1">今日事件 <a class="header-anchor" href="#今日事件" aria-label="Permalink to “今日事件”">​</a></h2><h3 id="更新-1" tabindex="-1">更新 <a class="header-anchor" href="#更新-1" aria-label="Permalink to “更新”">​</a></h3><ul><li>2020-04-25</li></ul><h3 id="获取" tabindex="-1">获取 <a class="header-anchor" href="#获取" aria-label="Permalink to “获取”">​</a></h3><h4 id="关键词-1" tabindex="-1">关键词 <a class="header-anchor" href="#关键词-1" aria-label="Permalink to “关键词”">​</a></h4><ul><li>​<code>今日事件</code></li><li>完全匹配</li><li>可自定义</li></ul><h4 id="回复内容-1" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容-1" aria-label="Permalink to “回复内容”">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【赋值变量Today&gt;=&lt;【现行日期-年】【现行日期-月】【现行日期-日】】</span></span>
<span class="line"><span>【赋值变量QQNumber&gt;=&lt;【发送者QQ】】</span></span>
<span class="line"><span>【&lt;-- 配置文件 --&gt;】</span></span>
<span class="line"><span>【赋值变量INIFile&gt;=&lt;files/epk_today_events.ini】</span></span>
<span class="line"><span>【赋值变量TXTFile&gt;=&lt;files/epk_today_events.txt】</span></span>
<span class="line"><span>【赋值变量TXTFileContent&gt;=&lt;【读入【变量TXTFile】】】</span></span>
<span class="line"><span>【&lt;-- 读取日期记录 --&gt;】</span></span>
<span class="line"><span>【赋值变量RecordDate&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;【变量QQNumber】&gt;=&lt;date&gt;=&lt;0】】</span></span>
<span class="line"><span>【&lt;-- 读取事件数量 --&gt;】</span></span>
<span class="line"><span>【赋值变量Max&gt;=&lt;【计算【取出行数【变量TXTFileContent】&gt;=&lt;】-1】】</span></span>
<span class="line"><span>【&lt;-- 生成新的事件序号 --&gt;】</span></span>
<span class="line"><span>【判含【变量RecordDate】&gt;=&lt;【变量Today】&gt;=&lt;</span></span>
<span class="line"><span>【写配置【变量INIFile】&gt;=&lt;【变量QQNumber】&gt;=&lt;date&gt;=&lt;【变量Today】】</span></span>
<span class="line"><span>【写配置【变量INIFile】&gt;=&lt;【变量QQNumber】&gt;=&lt;event&gt;=&lt;【随机数1-【变量Max】】】</span></span>
<span class="line"><span>&gt;=&lt;】</span></span>
<span class="line"><span>【&lt;-- 读取事件序号 --&gt;】</span></span>
<span class="line"><span>【赋值变量RecordEvent&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;【变量QQNumber】&gt;=&lt;event&gt;=&lt;1】】</span></span>
<span class="line"><span>【&lt;-- 读取事件内容 --&gt;】</span></span>
<span class="line"><span>【赋值变量TodayEvent&gt;=&lt;【取出一行【变量TXTFileContent】&gt;=&lt;【变量RecordEvent】】】</span></span>
<span class="line"><span>【&lt;-- 计算数值 --&gt;】</span></span>
<span class="line"><span>【赋值变量LuckValue&gt;=&lt;【计算(【变量QQNumber】+【变量Today】)/【变量RecordEvent】】】</span></span>
<span class="line"><span>【赋值变量LuckValue&gt;=&lt;【计算【变量LuckValue】@0】】</span></span>
<span class="line"><span>【赋值变量LuckValue&gt;=&lt;【文本-取出右边【变量LuckValue】&gt;=&lt;2】】</span></span>
<span class="line"><span>【&lt;-- 发送 --&gt;】</span></span>
<span class="line"><span>【艾特】今天的幸运指数是：【变量LuckValue】【换行】【变量TodayEvent】</span></span></code></pre></div><h3 id="重置" tabindex="-1">重置 <a class="header-anchor" href="#重置" aria-label="Permalink to “重置”">​</a></h3><h4 id="关键词-2" tabindex="-1">关键词 <a class="header-anchor" href="#关键词-2" aria-label="Permalink to “关键词”">​</a></h4><ul><li>​<code>重置事件</code></li><li>完全匹配</li><li>可自定义</li></ul><h4 id="回复内容-2" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容-2" aria-label="Permalink to “回复内容”">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【一天上限2】</span></span>
<span class="line"><span>【判真【逻辑【随机数1&gt;=&lt;10】&gt;2】&gt;=&lt;</span></span>
<span class="line"><span>【赋值变量QQNumber&gt;=&lt;【发送者QQ】】</span></span>
<span class="line"><span>【&lt;-- 配置文件 --&gt;】</span></span>
<span class="line"><span>【赋值变量INIFile&gt;=&lt;files/epk_today_events.ini】</span></span>
<span class="line"><span>【&lt;-- 重置日期 --&gt;】</span></span>
<span class="line"><span>【写配置【变量INIFile】&gt;=&lt;【变量QQNumber】&gt;=&lt;date&gt;=&lt;0】</span></span>
<span class="line"><span>【&lt;-- 发送 --&gt;】</span></span>
<span class="line"><span>【艾特】已重置。</span></span>
<span class="line"><span>&gt;=&lt;【艾特】重置失败！】</span></span></code></pre></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to “配置文件”">​</a></h3><ul><li>数据记录：<code>酷Q根目录/files/epk_today_events.ini</code>（可自动生成）</li><li>事件词库：<code>酷Q根目录/files/epk_today_events.txt</code>（需手动写入；一行一个事件；末尾空一行）</li></ul><h2 id="禁言对方" tabindex="-1">禁言对方 <a class="header-anchor" href="#禁言对方" aria-label="Permalink to “禁言对方”">​</a></h2><h3 id="更新-2" tabindex="-1">更新 <a class="header-anchor" href="#更新-2" aria-label="Permalink to “更新”">​</a></h3><ul><li>2020-05-03</li></ul><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to “简介”">​</a></h3><ul><li>禁言群内的目标QQ</li><li>默认每群一天仅可执行一次，每人每天仅可执行一次（可在 <code>配置文件</code>​ 和 <code>回复内容</code> 中修改）</li><li>默认 <code>06:00 ~ 23:00</code>​ 可用（可在 <code>配置文件</code> 中修改）</li></ul><h3 id="关键词-3" tabindex="-1">关键词 <a class="header-anchor" href="#关键词-3" aria-label="Permalink to “关键词”">​</a></h3><ul><li>​<code>我要禁言+QQ</code></li><li>前缀匹配</li><li>例：<code>我要禁言2854196310</code></li><li>可自定义前缀</li></ul><h3 id="回复内容-3" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容-3" aria-label="Permalink to “回复内容”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【一天上限1】</span></span>
<span class="line"><span>【&lt;-- 替换参数 --&gt;】</span></span>
<span class="line"><span>【赋值变量QQ&gt;=&lt;【取整【内容】】】</span></span>
<span class="line"><span>【赋值变量QQ&gt;=&lt;【判断【变量QQ】&gt;=&lt;【机器人QQ】&gt;=&lt;【变量QQ】&gt;=&lt;【发送者QQ】】】</span></span>
<span class="line"><span>【&lt;-- 今天的日期 --&gt;】</span></span>
<span class="line"><span>【赋值变量Today&gt;=&lt;【现行日期-年】【现行日期-月】【现行日期-日】】</span></span>
<span class="line"><span>【&lt;-- 读取数据 --&gt;】</span></span>
<span class="line"><span>【赋值变量INIFile&gt;=&lt;files/epk_mute_other.ini】</span></span>
<span class="line"><span>【赋值变量TimeMin&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;settings&gt;=&lt;time_min&gt;=&lt;6】】</span></span>
<span class="line"><span>【赋值变量TimeMax&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;settings&gt;=&lt;time_max&gt;=&lt;23】】</span></span>
<span class="line"><span>【赋值变量OnedayMax&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;settings&gt;=&lt;oneday_max&gt;=&lt;5】】</span></span>
<span class="line"><span>【赋值变量RunDate&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;run_date&gt;=&lt;【当前群号】&gt;=&lt;0】】</span></span>
<span class="line"><span>【&lt;-- 判断日期，不为当天则重置 --&gt;】</span></span>
<span class="line"><span>【判真【逻辑【变量RunDate】!=【变量Today】】&gt;=&lt;</span></span>
<span class="line"><span>【写配置【变量INIFile】&gt;=&lt;run_date&gt;=&lt;【当前群号】&gt;=&lt;【变量Today】】</span></span>
<span class="line"><span>【写配置【变量INIFile】&gt;=&lt;records&gt;=&lt;【当前群号】&gt;=&lt;0】</span></span>
<span class="line"><span>&gt;=&lt;】</span></span>
<span class="line"><span>【&lt;-- 判断时间，不为时间段内则不执行 --&gt;】</span></span>
<span class="line"><span>【判真【逻辑【现行时间-时】&gt;=【变量TimeMin】且【现行时间-时】&lt;=【变量TimeMax】】&gt;=&lt;</span></span>
<span class="line"><span>【&lt;-- 读取执行次数 --&gt;】</span></span>
<span class="line"><span>【赋值变量Count&gt;=&lt;【读配置【变量INIFile】&gt;=&lt;records&gt;=&lt;【当前群号】&gt;=&lt;0】】</span></span>
<span class="line"><span>【&lt;-- 判断执行次数 --&gt;】</span></span>
<span class="line"><span>【判真【逻辑【变量Count】&lt;【变量OnedayMax】】&gt;=&lt;</span></span>
<span class="line"><span>【写配置【变量INIFile】&gt;=&lt;records&gt;=&lt;【当前群号】&gt;=&lt;【计算【变量Count】+1】】</span></span>
<span class="line"><span>【禁言2&gt;=&lt;【变量QQ】】</span></span>
<span class="line"><span>剩余 【计算【变量OnedayMax】-【变量Count】-1】 次</span></span>
<span class="line"><span>&gt;=&lt;今天本群的禁言次数已被用完。】</span></span>
<span class="line"><span>&gt;=&lt;非使用时间段（本次已计入个人单日使用次数）。】</span></span></code></pre></div><h3 id="配置文件-1" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件-1" aria-label="Permalink to “配置文件”">​</a></h3><ul><li><p>​<code>酷Q根目录/files/epk_mute_other.ini</code></p></li><li><p>需要手动写入的内容</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[settings]</span></span>
<span class="line"><span>; 可执行的时间范围（单位：时）</span></span>
<span class="line"><span>time_min=6</span></span>
<span class="line"><span>time_max=23</span></span>
<span class="line"><span>; 一天内最大可执行次数</span></span>
<span class="line"><span>oneday_max=5</span></span></code></pre></div></li></ul><h2 id="精致睡眠" tabindex="-1">精致睡眠 <a class="header-anchor" href="#精致睡眠" aria-label="Permalink to “精致睡眠”">​</a></h2><h3 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-label="Permalink to “简介”">​</a></h3><ul><li>禁言发送关键词者至当日 06:00 或次日 06:00</li></ul><h3 id="关键词-4" tabindex="-1">关键词 <a class="header-anchor" href="#关键词-4" aria-label="Permalink to “关键词”">​</a></h3><ul><li>​<code>精致睡眠</code></li><li>完全匹配</li><li>可自定义</li></ul><h3 id="回复内容-4" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容-4" aria-label="Permalink to “回复内容”">​</a></h3><ul><li>仅晚上可用</li></ul><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【判真【逻辑【现行时间-时】&gt;=20】&gt;=&lt;【禁言480&gt;=&lt;】【艾特】睡吧，晚安~&gt;=&lt;】</span></span>
<span class="line"><span>【判真【逻辑【现行时间-时】&lt;=1】&gt;=&lt;【禁言360&gt;=&lt;】【艾特】睡吧，晚安~&gt;=&lt;】</span></span></code></pre></div><ul><li>根据当前执行时间</li></ul><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【赋值变量Now&gt;=&lt;【现行时间-时】】</span></span>
<span class="line"><span>【赋值变量ModeA&gt;=&lt;【计算(24-【变量Now】+6)#xh60-【现行时间-分】】】</span></span>
<span class="line"><span>【赋值变量ModeB&gt;=&lt;【计算(6-【变量Now】)#xh60-【现行时间-分】】】</span></span>
<span class="line"><span>【判真【逻辑【现行时间-时】&gt;=6】&gt;=&lt;【禁言【变量ModeA】&gt;=&lt;】&gt;=&lt;】</span></span>
<span class="line"><span>【判真【逻辑【现行时间-时】&lt;6】&gt;=&lt;【禁言【变量ModeB】&gt;=&lt;】&gt;=&lt;】</span></span>
<span class="line"><span>【艾特】睡吧~</span></span></code></pre></div><ul><li>根据时间，Minecraft 提示语</li></ul><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【赋值变量Now&gt;=&lt;【现行时间-时】】</span></span>
<span class="line"><span>【判真【逻辑【变量Now】&gt;=18或【变量Now】&lt;=6】&gt;=&lt;</span></span>
<span class="line"><span>【&lt;-- 是否成功 --&gt;】</span></span>
<span class="line"><span>【判真【逻辑【随机数1&gt;=&lt;100】&gt;50】&gt;=&lt;</span></span>
<span class="line"><span>【&lt;-- 成功 --&gt;】</span></span>
<span class="line"><span>【赋值变量ModeA&gt;=&lt;【计算(24-【变量Now】+6)#xh60-【现行时间-分】】】</span></span>
<span class="line"><span>【赋值变量ModeB&gt;=&lt;【计算(6-【变量Now】)#xh60-【现行时间-分】】】</span></span>
<span class="line"><span>【判真【逻辑【现行时间-时】&gt;=6】&gt;=&lt;【禁言【变量ModeA】&gt;=&lt;】&gt;=&lt;】</span></span>
<span class="line"><span>【判真【逻辑【现行时间-时】&lt;6】&gt;=&lt;【禁言【变量ModeB】&gt;=&lt;】&gt;=&lt;】</span></span>
<span class="line"><span>【艾特】睡吧，晚安~</span></span>
<span class="line"><span>&gt;=&lt;</span></span>
<span class="line"><span>【&lt;-- 不成功 --&gt;】</span></span>
<span class="line"><span>【赋值变量Select&gt;=&lt;【随机数1&gt;=&lt;5】】</span></span>
<span class="line"><span>【选择【变量Select】&gt;=&lt;</span></span>
<span class="line"><span>【艾特】你现在不能休息，周围有怪物在游荡&gt;=&lt;</span></span>
<span class="line"><span>【艾特】你的床已遗失或被阻挡&gt;=&lt;</span></span>
<span class="line"><span>【艾特】这张床已被占用&gt;=&lt;</span></span>
<span class="line"><span>【艾特】你现在不能休息，床太远了&gt;=&lt;</span></span>
<span class="line"><span>【艾特】你的床炸了【禁言720&gt;=&lt;】】</span></span>
<span class="line"><span>】</span></span>
<span class="line"><span>&gt;=&lt;【艾特】你只能在晚上睡觉】</span></span></code></pre></div><h2 id="统计群内-草-的次数" tabindex="-1">统计群内“草”的次数 <a class="header-anchor" href="#统计群内-草-的次数" aria-label="Permalink to “统计群内“草”的次数”">​</a></h2><h3 id="记录" tabindex="-1">记录 <a class="header-anchor" href="#记录" aria-label="Permalink to “记录”">​</a></h3><h4 id="关键词-5" tabindex="-1">关键词 <a class="header-anchor" href="#关键词-5" aria-label="Permalink to “关键词”">​</a></h4><ul><li>​<code>草</code></li><li>模糊匹配</li></ul><h4 id="回复内容-5" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容-5" aria-label="Permalink to “回复内容”">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>【赋值变量CountBefore&gt;=&lt;【读配置files/epk_datas.ini&gt;=&lt;stats&gt;=&lt;count_grass_【当前群号】&gt;=&lt;0】】</span></span>
<span class="line"><span>【赋值变量CountAfter&gt;=&lt;【计算【变量CountBefore】+1】】</span></span>
<span class="line"><span>【写配置files/epk_datas.ini&gt;=&lt;stats&gt;=&lt;count_grass_【当前群号】&gt;=&lt;【变量CountAfter】】</span></span></code></pre></div><h3 id="获取-1" tabindex="-1">获取 <a class="header-anchor" href="#获取-1" aria-label="Permalink to “获取”">​</a></h3><h4 id="关键词-6" tabindex="-1">关键词 <a class="header-anchor" href="#关键词-6" aria-label="Permalink to “关键词”">​</a></h4><ul><li>​<code>草的数量</code></li><li>完全匹配</li><li>可自定义</li></ul><h4 id="回复内容-6" tabindex="-1">回复内容 <a class="header-anchor" href="#回复内容-6" aria-label="Permalink to “回复内容”">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>本群目前已有 【读配置files/epk_datas.ini&gt;=&lt;stats&gt;=&lt;count_grass_【当前群号】&gt;=&lt;0】 棵草。</span></span></code></pre></div><p>‍</p>`,59)])])}const k=s(e,[["render",i]]);export{g as __pageData,k as default};
