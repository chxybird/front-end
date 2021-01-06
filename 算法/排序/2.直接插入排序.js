/*
    直接插入排序:
        时间复杂度 O(N^2)
        空间复杂度 O(1)
        最好情况:正序
            O(N)
        最坏情况:逆序
            O(N^2)
        稳定性:稳定
 */

//假设序列
let p = [10, 5, 25, 4, 1, 56, 48, 99, 2, 12]

//排序算法实现
let sort = function (array) {
    //定义哨兵(表示当前要排序的元素)
    let sentinel;
    //第一个元素默认有序,无序集合为从N-1个元素
    for (let i = 1; i <= array.length - 1; i++) {
        let j = i;
        sentinel = array[i];
        //确定元素插入的位置
        while (j > 0 && sentinel < array[j - 1]) {
            //元素后移
            array[j] = array[j - 1];
            j--;
        }
        array[j] = sentinel;
    }
    return array;
}

//我的实现
let my_sort = function (array) {
    //定义哨兵(表示当前要排序的元素)
    let sentinel;
    //第一个元素默认有序,无序集合为从N-1个元素
    for (let i = 1; i <= array.length - 1; i++) {
        sentinel = array[i];
        //在排好序的集合中确定元素的插入位置
        for (let j = i; j > 0; j--) {
            //确定位置
            if (sentinel < array[j - 1]) {
                //元素后移
                array[j] = array[j - 1];
            }else {
                break;
            }
        }
        //确定插入的位置后进行插入
        array[j]=sentinel;
    }
    return array;
}

let sort_array = sort(p);
let my_sort_array=sort(p);
console.log(sort_array);
console.log(my_sort_array);

