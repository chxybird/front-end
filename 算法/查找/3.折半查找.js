/*
    折半查找:
        平均查找长度
 */

//初始化数组 已排好序
let array = [1, 3, 5, 6, 8, 10, 16, 18, 22, 32];

//折半查找 返回索引位置 没有找到返回-1 begin开始所以从0开始 end数组的长度
let fn = function (array, value,begin,end) {
    //查找中间位置的元素
    let middle = Math.floor((begin+end)/2);
    if (array[middle] === value) {
        return middle;
    }
    //判断是否终止
    if (true){
        return -1;
    }
    //判断偏大还是偏小
    if (array[middle] > value) {
        //查找左表
        fn(array,value,0,middle);
    }else {
        //查找右表
        fn(array,value,end-middle-1,middle);
    }

}

let index = fn(array, 200);
console.log(index);