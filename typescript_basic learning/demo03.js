"use strict";
//声明数值类型的变量age，但不予赋值
//number类型
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
console.log('----------------------');
//string类型
var jspangg = "技术胖 jspang.com";
console.log(jspangg);
//bool类型 true/false
var b = true;
var c = false;
console.log('----------------------');
//enum类型（枚举类型）
//世界上人的类型：男人、女人、中性
//一年的季节：春、夏、秋、冬 ，有四个结果。
// enum REN{ nan , nv ,yao}
// console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao); //返回了妖 这个字
console.log('----------------------');
//any类型
var t = 10;
t = "jspang";
t = true;
console.log(t);
console.log('----------------------');
//null类型
