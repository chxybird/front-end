/**
 *      一、DOM概念
 *          DOM是BOM的一个子对象，表示的是文档对象。dom对象中每一个标签由element对象表示，也可以由node对象表示。
 *
 *      二、事件的概念以及DOM的常用事件
 *          1.事件三要素:事件源、事件类型、事件执行程序。
 *          2.事件流:事件执行的顺序
 *              捕获阶段        事件捕获阶段是指从父元素到子元素的过程
 *              当前目标阶段
 *              冒泡阶段        事件冒泡阶段指的是从子元素到父元素的过程
 *              JS中捕获阶段和冒泡阶段只能有一个发生
 *          3.DOM常用事件类型
 *              鼠标事件:
 *                  onclick                 鼠标左键单击中
 *                  onmouseover             鼠标经过
 *                  onmouseout              鼠标离开
 *                  onmouseup               鼠标弹起
 *                  onmousemove             鼠标移动
 *                  onmousedown             鼠标按下
 *                  onfocus                 鼠标焦点(没有事件冒泡)
 *                  onblur                  失去鼠标焦点(没有事件冒泡)
 *                  contextmenu             鼠标右键菜单事件
 *                  selectstart             鼠标选中
 *              键盘事件:
 *                  onkeyup                 按键松开
 *                  onkeydown               键盘按下
 *
 *          4.事件对象(event)
 *              常用属性
 *                  type                    触发事件的类型
 *                  target                  触发事件的对象
 *              常用方法
 *                  preventDefault()        阻止默认事件(例如让<a></a>失去跳转功能)
 *                  stopPropagation()       阻止事件冒泡
 *          5.事件委托(委派)的概念
 *              事件委托的原理就是不要给子节点注册事件,通过给父节点注册事件则每一个子节点都可以注册事件，利用的原理就是事件流的冒泡阶段。
 *
 *
 *
 *
 *
 *      三、DOM常用API
 *          获取元素
 *              getElementById                  根据元素id获取元素对象
 *              getElementsByClassName          根据类名获取元素对象集合
 *              getElementsByName               根据元素name属性获取元素对象集合
 *              getElementsByTagName            根据标签名获取元素对象集合
 *              querySelector                   根据选择器获取第一个元素对象
 *              querySelectorAll                根据选择器获取对象集合
 *          删除元素
 *              remove                          删除当前元素
 *              removeChild                     删除当前元素的某个子元素
 *          添加元素
 *              createElement                   创建一个元素节点。
 *              appendChild                     将元素节点追加到该节点下。
 *              insertBefore(new,exist)         在某个元素之前添加
 *          获取属性
 *              getAttribute                    获取属性的值
 *              getAttributeNames               获取属性key的集合
 *              getAttributeNode                获取当前属性的Node对象
 *          增加或者修改属性
 *              setAttribute                    设置指定属性的值
 *          删除属性
 *              removeAttribute                 删除指定的属性
 *          事件操作
 *              addEventListener                注册事件 type事件类型、fn事件处理函数、option事件流选项默认false(冒泡阶段) true(捕获阶段)
 *              removeEventListener             注销事件
 *
 *
 *
 *
 *
 *
 *      四、DOM(element)的常用内置属性
 *          innerHTML           识别HTML标签 规范使用此属性
 *          innerText           不识别HTML标签
 *          childNodes          子节点
 *          parentNode          父节点
 *          firstChild          第一个子节点
 *          lastChild           最后一个子节点
 *
 *
 */


let click = function (event) {
    let element = document.querySelector('#title');
    element.removeAttribute('style');
    let btn = document.getElementById("btn");
    btn.removeEventListener('click',click,false);
}

let btn = document.getElementById("btn");
document.addEventListener('click',click,false);










