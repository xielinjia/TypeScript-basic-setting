//声明数值类型的变量age，但不予赋值
//number类型
var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)
console.log('----------------------')


//string类型
var jspangg:string = "技术胖 jspang.com"
console.log(jspangg)


//bool类型 true/false
var b:boolean = true
var c:boolean = false
console.log('----------------------')


//enum类型（枚举类型）
//世界上人的类型：男人、女人、中性
//一年的季节：春、夏、秋、冬 ，有四个结果。

// enum REN{ nan , nv ,yao}
// console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。

enum REN{
    nan = '男',
    nv = '女',
    yao= '妖'
}
console.log(REN.yao)  //返回了妖 这个字
console.log('----------------------')


//any类型
var t:any =10 
t = "jspang"
t = true
console.log(t)
console.log('----------------------')
//null类型