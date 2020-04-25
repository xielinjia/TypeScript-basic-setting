"use strict";
var myhusband = { sex: '男', interest: '看书、作家务', maiBaoBao: true };
console.log(myhusband); //{ sex: '男', interest: '看书、作家务', maiBaoBao: true }
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1); //匹配判断flag=1,如果没有匹配到return false，else true
};
console.log(mySearch('高、富、帅、德', '胖')); //false
