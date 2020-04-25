"use strict";
//构造函数声明法
// let reg1:RegExp = new RegExp("Jspang")  //表示字符串规则里含有jspang
// console.log(reg1)
// let reg2:RegExp = new RegExp("jspang",'gi')
// console.log(reg2)
// //字面量声明（一般用此种方式）
// let reg3:RegExp = /jspang/
// let reg4:RegExp = /jspang/gi
// RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。
// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，
// 如果存在则返回 true，不存在则返回 false。
// exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，
// 则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。
//test
// let reg1:RegExp =  /jspang/i
// let website:string = 'jspang.com'
// let result1:boolean = reg1.test(website)
// console.log(result1)    //true
//exec
var reg1 = /jspang/i;
var website = 'jspang.com';
console.log(reg1.exec(website));
//[ 'jspang', index: 0, input: 'jspang.com', groups: undefined ]
