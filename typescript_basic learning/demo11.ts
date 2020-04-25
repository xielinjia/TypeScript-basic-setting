//类是对象具体事物的一个抽象，对象是类的具体表现
class XiaoJieJie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age 
    }
    say(){
        console.log('小哥哥好')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
console.log(jiejie)
jiejie.say()

// XiaoJieJie { name: '范冰冰', age: 18 }
// 小哥哥好