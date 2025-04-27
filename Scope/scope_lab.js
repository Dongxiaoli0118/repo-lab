// 全局作用域
var globalVar="我是一个全局变量";
let globalLet="我也是全局的，但用let限定作用域";
const globalConst="我是一个全局常量";

{
    // 块作用域
    var blockVar="我是一个块作用域的var";
    let blockLet="我是一个块作用域的let";
    const blockConst="我是一个块作用域的const";
}
// global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// block scope
console.log(blockVar) // 可以看到blockVar的输出，因为它可以在大括号{}外部访问，用var定义的变量具有函数作用域
console.log(blockLet) // 报错blockLet is not defined; 因为let定义的变量是块级作用域，只能在大括号内访问，同理const也是一样

// function scope
function show(){
    var functionVar = "我是一个块级作用域的变量";
    let functionLet = "我是一个块级作用域的 let";
    const functionConst = "我是一个块级作用域的 const";
    }
    show();
    
    console.log(functionVar); // 抛出 ReferenceError
    console.log(functionLet); // 抛出 ReferenceError
    console.log(functionConst); // 抛出 ReferenceError