"use strict";
// 基本类型字符串：由单引号或者双引号括起来的一串字符串
// 引用类型字符串：用new 实例化的 String类型
// var jspang:string = "技术胖"
// let jspanga:String = new String("jspang.com")
// console.log(jspang)
// console.log(jspanga)
// console.log(jspang.length)
// console.log(jspanga.length)
//查找字符串
// let something:string = "清早起来打开窗，心情美美哒，我要出去找小姐姐，心情美美哒。"
// let xiaoJieJie:string = "美美哒"
// let jspang:string = "js胖"
// console.log(something.indexOf(xiaoJieJie))   //10
// console.log(something.lastIndexOf(xiaoJieJie)) //25
// console.log(something.indexOf(jspang)) //查找不到，返回-1
//截取字符串
// let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
// let xiaoJieJie:string = "小姐姐"
// console.log(something.substring(8)) //到index8
// console.log(something.substring(8,14)) //从index8到14+1
//替换字符串
var something = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。";
var xiaoJieJie = "小姐姐";
console.log(something.replace(xiaoJieJie, '小哥哥'));
