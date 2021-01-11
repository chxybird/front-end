/**
 *  顺序查找:
 *      平均查找长度:(N+1)/2;
 */

//初始化数组 已排好序
let array = [1, 3, 5, 6, 8, 10, 16, 18, 22, 32];

//顺序查找 返回索引位置 没有找到返回-1
let fn = function (array, value) {
    //遍历数组 比较元素
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

let index = fn(array, 200);
console.log(index);
