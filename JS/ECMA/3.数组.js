/*
    数组的本质也是一个对象
 */

//第一种
let p=new Array();


//第二种
let array=[1,2,3,4,5];

//普通遍历
for (let i=0;i<array.length;i++){
    console.log(array[i]);
}

//ES6的增加遍历
for (item of array){
    console.log(item);
}
