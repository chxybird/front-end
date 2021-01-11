/*
    一、JS的作用域链的概念
        JS的作用域有两种:全局作用域、局部作用域。JS作用域链我个人的理解就是局部作用域可以访问全局作用域，反之不行。
    二、闭包的概念
        JS的闭包是解决全局作用域可以访问局部作用域变量的一种解决方案。
 */


let count = 0;
let fn = function () {
    return count = count + 1;
}

fn();
fn();
fn();
console.log(count);
//上述代码输出结果为3

(function () {
    console.log('自我调用');
})();






