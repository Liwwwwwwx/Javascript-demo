/*
 	Date:2021/8/2	
 */

//简单的变量声明
var x;
x = 23;

//条件语句
if(x>22) {
    console.log('true')
}else {
    console.log('false')
}

//var声明提升
console.log(a)
console.log(typeof a)
if(true){
    var a = 2;
    console.log('a=' + a) //a 已经赋值2  a=2
}
console.log(a) //2

console.log(b) //undefined
if(false) {
    var b = 3
}
console.log(b) //false b并没有被赋值

//循环语句
for(var i=0; i<3; i++) {
    console.log('i = ' + i) //  0 1 2
}
console.log(i) // 3 i全局变量，并没有被销毁

for(let j=0; j<3; j++) {
    console.log('j = ' + j)
}
//console.log(j) //j is not defined

//函数的两种定义方式
function max(x,y){
    return x>y?x:y;
}
console.log('大数:' + max(3,4))

min = function(x,y){
    return x<y?x:y;
}
console.log("小数:" + min(3,4))