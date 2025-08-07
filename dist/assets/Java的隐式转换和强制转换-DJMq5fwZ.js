var e=`---
title: Java的隐式转换和强制转换
date: 2024-07-31 12:58:58
tags: Java
---
# 隐式转换

## 隐式转换的发生条件
隐式转换又可以称为自动类型提升
<!-- more -->
把一个取值范围小的数值转换成取值范围大的数据
范例

    int a = 10;
    double b = a;

这里就需要我们知道怎么比较数据的取值范围大小

java 常见数据类型他们的字节大小比较
由小到大
byte< short< int< long< float< double

## 隐式转换的提升规则

1.取值范围小的和取值范围大的进行运算，小的会先提升称为大的数据类型，再进行运算

    public class Test {
        public static void main(String[] args) {
            int a = 10;
            double b = 12.3;
            // 数据类型？ c = a + b;
        }
    }

 c 为 double 类型的，程序在运行时应为先将 a 提升为 double，再进行运算 a + b


2.byte short char 三种类型的数据在运算的时候，都会先提升为 int 类型，然后再进行运算

    public class Test {
        public static void main(String[] args) {
            byte a = 10;
            byte b = 20;
            // 数据类型？ c = a + b;
        }
    }

 c 为 int 类型的，程序运行时先把 a 和 b 提升为 int 类型，再进行 a + b 

# 强制转换

把一个取值范围大的数值赋值给一个取值范围小的变量是不允许直接赋值的，如果一定要那么做就需要加入强制转换

格式：
目标数据类型 变量名 = (目标数据类型) 被强转的数据;

    double a = 12.3;
    int b = (int) a;

需要注意强转可能会产生数据错误，慎用`;export{e as default};