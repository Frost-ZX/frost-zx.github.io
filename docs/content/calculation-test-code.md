---
title: 运算速度测试代码
date: 2025-02-11T20:55:04Z
lastmod: 2025-02-20T22:58:29Z
tags: [测试,代码片段]
---

# 运算速度测试代码

#### C

```c
#include <stdio.h>
#include <math.h>
#include <time.h>
int main()
{
  long tStart = time(NULL);
  long tEnd = tStart + 10;
  long tNow = 0;
  long count = 0;
  do {
    double num = sqrt(count);
    tNow = time(NULL);
    count++;
  } while (tNow < tEnd);
  printf("%ld", count);
  return 0;
}
```

#### Java

```java
public class CalcTest {
    public static void main(String[] args) {
        long dMillis = 2000;
        long dSeconds = 0;
        long tStart = System.currentTimeMillis();
        long tEnd = 0;
        long tCurrent = 0;
        long count = 0;

        if (args.length == 1) {
            try {
                dMillis = Long.parseLong(args[0]);
            } catch (Exception err) {
                System.out.println("[Error] invalid duration: " + args[0]);
                return;
            }
        }

        dSeconds = dMillis / 1000;
        tEnd = tStart + dMillis;

        System.out.println("[Set] duration = " + dSeconds + "s");

        do {
            double num = Math.sqrt(count);
            count++;
            tCurrent = System.currentTimeMillis();
        } while (tCurrent < tEnd);

        System.out.println("[Result] " + count + " loops in " + dSeconds + "s");
    }
}
```
