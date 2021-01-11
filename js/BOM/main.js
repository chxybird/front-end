/*
    1.BOM的组成(浏览器对象)
        window
            -document(DOM)      文档对象
            -location           地址栏对象URL
            -navigation
            -screen
            -history
    2.BOM的事件
        -页面加载事件 onload      当页面加载完毕之后执行
        -窗口大小事件 onresize    当页面大小发生改变执行

    3.window的常用方法
        -setTimeout                 设置定时任务(只执行一次)
        -clearTimeout               清除定时器
        -setInterval                设置循环定时器(反复执行)
        -clearInterval              清除循环定时器

    4.location对象
        常见属性:
            href            整个URL
            host            主机
            port            端口号
            pathname        uri
            search          参数
            hash            锚点
        常见方法:
            assign          跳转页面
            replace         替换页面
            reload          刷新页面
 */



let timer = window.setTimeout(function () {
    window.alert('5秒后我弹出来啦！！！');
},5000);
window.clearInterval()