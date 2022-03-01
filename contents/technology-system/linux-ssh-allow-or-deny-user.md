# Linux 允许或禁止指定用户进行 SSH 登录

参考资料
- [Ubuntu Manpage: sshd_config](http://manpages.ubuntu.com/manpages/precise/en/man5/sshd_config.5.html)
- [Ubuntu Manpage: ssh_config](http://manpages.ubuntu.com/manpages/precise/en/man5/ssh_config.5.html)

## 允许指定用户登录（白名单）

在 sshd 的配置文件 `/etc/ssh/sshd_config` 中添加 `AllowUsers` 项，其后方跟随以空格分隔的用户名 PATTERN 列表。  
例如允许 `test-a` 用户和从 `192.168.1.100` 登录的 `test-b` 用户：

```text
AllowUsers test-a test-b@192.168.1.100
```

**原文**

> This keyword can be followed by a list of user name patterns, separated by spaces.  
> If specified, login is allowed only for user names that match one of the patterns.  
> Only user names are valid; a numerical user ID is not recognized.  
> By default, login is allowed for all users.  
> If the pattern takes the form USER@HOST then USER and HOST are separately checked, restricting logins to particular users from particular hosts.  
> The allow/deny directives are processed in the following order: DenyUsers, AllowUsers, DenyGroups, and finally AllowGroups.

## 禁止指定用户登录（黑名单）

在 sshd 的配置文件 `/etc/ssh/sshd_config` 中添加 `DenyUsers` 项，，其后方跟随以空格分隔的用户名 PATTERN 列表。  
例如禁止 `test-c` 用户和从 `192.168.1.100` 登录的 `test-d` 用户：

```text
DenyUsers test-c test-d@192.168.1.100
```

**原文**

> This keyword can be followed by a list of user name patterns, separated by spaces.
> Login is disallowed for user names that match one of the patterns.
> Only user names are valid; a numerical user ID is not recognized.
> By default, login is allowed for all users.
> If the pattern takes the form USER@HOST then USER and HOST are separately checked, restricting logins to particular users from particular hosts.
> The allow/deny directives are processed in the following order: DenyUsers, AllowUsers, DenyGroups, and finally AllowGroups.

## PATTERN

一个 PATTERN 由零个或多个非空白字符以及“*”（匹配零个或多个字符的通配符）或“?”（仅匹配一个字符的通配符）组成。
例如匹配主机 `192.168.0.0` ~ `192.168.0.9`，可以使用：

```text
192.168.0.?
```

**原文**

```text
A pattern consists of zero or more non-whitespace characters, ‘*’ (a wildcard that matches zero or more characters), or ‘?’ (a wildcard that matches exactly one character).
For example, to specify a set of declarations for any host in the “.co.uk” set of domains, the following pattern could be used:

    Host *.co.uk

The following pattern would match any host in the 192.168.0.[0-9] network range:

    Host 192.168.0.?

A pattern-list is a comma-separated list of patterns.
Patterns within pattern-lists may be negated by preceding them with an exclamation mark (‘!’).
For example, to allow a key to be used from anywhere within an organisation except from the “dialup” pool, the following entry (in authorized_keys) could be used:

    from="!*.dialup.example.com,*.example.com"
```

## 注意

- 配置完成后需要重启 `sshd` 服务（例如 `service sshd restart`）。
- 配置的 allow / deny 指令按照此顺序进行处理：`DenyUsers -> AllowUsers -> DenyGroups -> AllowGroups`
