/**
 *      一、DOM概念
 *          DOM是BOM的一个子对象，表示的是文档对象。dom对象中每一个标签由element对象表示，也可以由node对象表示。
 *
 *      二、事件的概念以及DOM的常用事件
 *          1.事件三要素:事件源、事件类型、事件执行程序。
 *          2.DOM常用事件类型
 *              鼠标事件:
 *                  onclick                 鼠标左键单击中
 *                  onmouseover             鼠标经过
 *                  onmouseout              鼠标离开
 *                  onmouseup               鼠标弹起
 *                  onmousemove             鼠标移动
 *                  onmousedown             鼠标按下
 *                  onfocus                 鼠标焦点
 *                  onblur                  失去鼠标焦点
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
 *          增加属性
 *
 *          修改属性
 *
 *          删除属性
 *
 *
 *      四、DOM(element)的常用属性
 *          innerHTML           识别HTML标签 规范使用此属性
 *          innerText           不识别HTML标签
 *          childNodes          子节点
 *          parentNode          父节点
 *          firstChild          第一个子节点
 *          lastChild           最后一个子节点
 *          元素属性
 *
 *
 */


let click = function () {
    let div = document.querySelector('#div');
    let attribute = div.getAttribute('id');
    console.log(attribute);
    let attributeNames = div.getAttributeNames();
    console.log(attributeNames);
    let attributeNode = div.getAttributeNode('id');
    console.log(attributeNode.localName,attributeNode.name,attributeNode.value);
}

let btn = document.getElementById("btn");
btn.onclick=click;










