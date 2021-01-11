/*
    CommonJS规范:
        CommonJS规定加载模块是同步的。
            导入
            导出
 */

let print= require('./材料包/print');

let x=20,y=30;

print.print(x,y);
