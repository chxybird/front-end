//事件处理程序
let fn = function (event) {
    //阻止默认事件
    event.preventDefault();
}

//获取无序列表
let ul = document.querySelector('#ul');
//添加事件监听器
//鼠标右键菜单事件
ul.addEventListener('contextmenu',fn,false);
//选中事件
ul.addEventListener('selectstart',fn,false);