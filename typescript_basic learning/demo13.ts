//类的继承
class Jspang{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()

//实例化 子继承父类extends
class JsShuai extends Jspang{
    public xingxiang:string = '帅气'
    public interest(){
//重写就是在子类中重写父类的方法，用super调用
        super.interest()
        console.log('建立电商平台')
    }
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}

let shuai = new JsShuai("技术帅",5,'演讲')
shuai.interest()
shuai.zhuangQian()