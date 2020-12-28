/*
    js的数据类型
    区别:内存分布不同，基本数据类型在栈中，对象类型在堆中!!!
        1.基本数据类型(五种)
            - String
            - Number
            - Boolean
            - Null
            - Undefined
        2.对象类型
            - Object
                - Function
                - Data
                - Array
                - ......
 */

//第一种
let student=new Object();
student.name="张三";
student.age=20;
student.sex="男";
console.log(student);


//第二种 JS用{}表示一个对象的常量
let person={
    name:"李四",
    age:22,
    sex:"男"
};
console.log(person);


