/*
 	Date:2018/3/12	
 */
//临时包装对象
var str="abcde";
str.length=1;
console.log(str,str.length); // abcde 5  无法修改str的长度


//数据类型转换
if(new Boolean(false)){
	console.log("执行");
}
//输出执行    转换成对象 new Boolean(false)为新生成的一个个Boolean对象

var temp="23" -1;
console.log(typeof temp) //number

var a=2;
if(2==a){
	console.log("输出");
}

//写成2=a；会报错；    如果写成a=2，不会报错

var n1=123456.789;
console.log(n1.toFixed(2)); //去除倒数第二个数据
console.log(n1.toPrecision(2));
console.log(toString());
console.log(n1.toExponential(2));

//
console.log();





