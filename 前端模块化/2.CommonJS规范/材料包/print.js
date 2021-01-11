let print=function () {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

//导出模块
module.exports.print=print;