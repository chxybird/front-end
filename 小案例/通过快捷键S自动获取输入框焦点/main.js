//事件处理程序
let fn = function (event) {
    if (event.key === 's') {
        let input = document.querySelector('#input');
        input.focus();
    }

}
//给文档对象注册键盘按下事件
document.addEventListener('keyup', fn, false);