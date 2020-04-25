"use strict";
//变量的作用域，函数划分    void空值
// var yangzi = '刘德华'
// function zhengXing():void{
//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)
//全局变量，局部变量
// var yangzi = '刘德华'
// function zhengXing():void{
//     var yangzi:string = '马德华'
//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)
// var yangzi:string = '刘德华'
// function zhengXing():void{
//     console.log('技术胖整形成了'+yangzi+'的样子')     //此处yangzi变量提升undefined
//     var yangzi:string = '马德华'
//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)
//let
function zhengXing() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        //因为ts编译成js，他自动给我们加了ES5的处理，ES5里是没有let关键字的,js中自动转为var可正常使用
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    // console.log('技术胖整形成了' + yangzib + '的样子')    //此处报错编译后变为var可得到
}
zhengXing();
