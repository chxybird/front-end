/*
    快速排序:

 */

//假设序列
let p = [10, 5, 25, 4, 1, 56, 48, 99, 2, 12]



//算法实现
let sort = function (array,start,end) {
    let low = start;
    let high = end;
    //基准
    let sentinel = array[0];
    //临时变量 用于交换
    let temp;
    //循环 直到左右相遇
    while (low < high) {
        //从右往左筛选 筛选一个小于基准的数
        while (array[high] >= sentinel && low < high) {
            high--;
        }
        //从左往右筛选 筛选一个大于基准的数
        while (array[low] <= sentinel && low < high) {
            low++;
        }
        //交换元素一定要先判断指针有没有相遇
        if (low<high){
            //交换左右
            temp = array[low];
            array[low] = array[high];
            array[high] = temp;
        }
    }
    //交换基准位置分割为两个数组 此时low==high
    array[0]=array[high];
    array[high]=sentinel;
    console.log(low,high);
    //递归 分治左右两个数组
    //[0,low-1]
    sort(array,0,low-1);
    //[low+1,array.length-1]
    sort(array,low+1,array.length-1);
}


sort(p,0,p.length-1);
console.log(p);