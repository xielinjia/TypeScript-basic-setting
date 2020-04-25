//不传任何参数
// let d:Date = new Date()
// console.log(d)   //当前时间 2020-04-25T19:24:22.407Z


//传递一个整数
// let d:Date = new Date(1000)
// let da:Date = new Date(2000)
// console.log(d)  //1970-01-01T00:00:01.000Z
// console.log(da) //1970-01-01T00:00:02.000Z


//传递一个字符串
// let d1:Date = new Date('2018/09/06 05:30:00')    
// let d2:Date = new Date('2018-09-06 05:30:00')
// let d3:Date = new Date('2018-09-06T05:30:00')
// console.log(d1)
// console.log(d2)
// console.log(d3)
//均为   2018-09-05T21:30:00.000Z  （UTC+8:00  北京时间）


//传递表示年月日分秒的变量
// let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
// year 表示年份，4位数字。
// month表示月份，数值是0(1月)~11(12月)之间的整数。
// day 表示日期。数值是1~31之间的整数。
// hours 表示小时，数值是0-23之间的整数。
// minutes 表示分钟数，数值是0~59之间的整数。
// seconds 表示秒数，数值是0~59之间的整数。
// ms 表示毫秒数，数值是0~999之间的整数
let d:Date = new Date(2000,9,20,13,21,58,666);     //2000-10-20T05:21:58.666Z
console.log(d)