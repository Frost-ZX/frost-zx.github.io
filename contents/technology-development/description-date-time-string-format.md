# 包含 T 和 Z 的日期时间字符串格式

ECMAScript 基于 ISO 8601 扩展格式的简化定义了日期时间的字符串交换格式。
格式为：`YYYY-MM-DDTHH:mm:ss.sssZ`

| 内容 | 描述                                                       |
| :--- | :--------------------------------------------------------- |
| YYYY | 公历中 0000 到 9999 年的十进制数字。                       |
| -    | “-”（连字符）在字符串中出现两次，分隔年、月、日。          |
| MM   | 一年中的月份，从 01（一月）到 12（十二月）。               |
| DD   | 月份中的天数，从 01（第一天）到 31（最后一天）。           |
| T    | 表示字符串中的时间部分的开始。                             |
| HH   | 自午夜以来经过的完整小时数，从 00 到 24 的两位十进制数字。 |
| :    | “:”（冒号）在字符串中出现两次，分隔时、分、秒。            |
| mm   | 当前小时经过的完整分钟数，从 00 到 59 的两位十进制数字。   |
| ss   | 当前分钟经过的完整秒数，从 00 到 59 的两位十进制数字。     |
| .    | “.”（点）在字符串中出现一次，分隔秒、毫秒。                |
| sss  | 当前秒经过的完整毫秒数，从 000 到 999 的三位十进制数字。   |
| Z    | 时区，使用“Z”表示 UTC，或使用“+”、“-”，并在后方跟随 HH:mm  |
|      | 格式的时间表达式表示偏移量（例如 `+0800` 表示 +8 小时）。        |

所有数字必须为**十进制**形式。

如果 `MM` 或 `DD` 字段不存在，则使用默认值“01”。
如果 `HH`、`mm` 或 `ss` 字段不存在，则使用默认值“00”。
若 `sss` 字段不存在，则使用默认值“000”。
如果没有指定时区，则把字符串作为**本地时间**进行解析。

由于每天都以午夜开始和结束，所以可以在时间表达式中使用 `00:00` 和 `24:00` 来区分相同时间点的两个午夜。
也就是说，字符串 `1995-02-04T24:00` 和 `1995-02-05T00:00` 可以表示完全相同的时间点。

字符串中可以只包含日期：

```text
YYYY
YYYY-MM
YYYY-MM-DD
```

字符串中可以只包含时间：

```text
THH:mm
THH:mm:ss
THH:mm:ss.sss
```

参考资料：

- [ECMAScript 2015 Language Specification – Date Time String Format](https://262.ecma-international.org/6.0/#sec-date-time-string-format)
- [rfc2822 - Date and Time Specification](https://datatracker.ietf.org/doc/html/rfc2822#section-3.3)