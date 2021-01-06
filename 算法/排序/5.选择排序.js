/*
    选择排序:
        时间复杂度 O(N^2)
        空间复杂度 O(1)
        最好情况:正序 比较不交换
            O(N^2)
        最坏情况:逆序 比较且交换
            O(N^2)
        稳定性:不稳定
 */

//假设序列
let p = [10, 5, 25, 4, 1, 56, 48, 99, 2, 12]

//算法实现
let sort = function (array) {
    let sentinel;
    let index;
    let temp;
    for (let i = 0; i < array.length; i++) {
        sentinel = array[i];
        index=i;
        //筛选出最小元素 并记录索引位置
        for (let j = i; j < array.length; j++) {
            if (array[j] < sentinel) {
                sentinel=array[j];
                index=j;
            }
        }
        //筛选的元素加入排序集合
        temp=array[index];
        array[index]=array[i];
        array[i]=temp;
    }
    return array;
}

let sort_array = sort(p);
console.log(sort_array);