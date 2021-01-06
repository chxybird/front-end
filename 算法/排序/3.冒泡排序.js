/*
    冒泡排序:
        时间复杂度 O(N^2)
        空间复杂度 O(1)
        最好情况:正序 比较不交换
            O(N^2)
        最坏情况:逆序 比较且交换
            O(N^2)
        稳定性:稳定
 */

//假设序列
let p = [10, 5, 25, 4, 1, 56, 48, 99, 2, 12]

//算法实现
let sort = function (array) {
    //定义哨兵
    let sentinel;
    //N个元素冒泡排序需要进行N-1趟
    for (let i = 0; i < array.length - 1; i++) {
        //每一趟排序比较并交换次数逐步减少
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                sentinel = array[j];
                array[j] = array[j + 1];
                array[j + 1] = sentinel;
            }
        }
    }
    return array;
}

let sort_array = sort(p);
console.log(sort_array);