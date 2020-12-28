/*
    js的函数本质上是一个对象
 */

//第一种
function play() {
    console.log("play");
}

//第二种
let eat = function () {
    console.log("eat");
}

//函数作为对象的成员 此种函数叫方法
let person = {
    name: "张三",
    age: 20,
    run() {
        console.log("run")
    }
}

//arguments表示函数实际传递的参数数组
let sum = function (x,y) {
    console.log(arguments.length);
};


