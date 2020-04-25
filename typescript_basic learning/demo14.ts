//定义接口的关键字是interface
interface Husband {
    sex:string
    interest:string
    maiBaoBao?:Boolean   //?代表可选择参数接口，可以写也可以不写
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
console.log(myhusband)//{ sex: '男', interest: '看书、作家务', maiBaoBao: true }



//规范化类型接口---匹配
interface  SearchMan{
    (source:string,subString:string):boolean
}

let mySearch:SearchMan

mySearch = function(source:string,subString:string):boolean{
    let flag =source.search(subString)
    return (flag != -1) //匹配判断flag=1,如果没有匹配到return false，else true
} 

console.log(mySearch('高、富、帅、德','胖')) //false