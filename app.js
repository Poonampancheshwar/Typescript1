console.log('this is my fisrt typescript project');
var fun1 = function () {
    var a = 40;
    var b = '20';
    var add = a + b;
    console.log(add);
};
fun1();
var addFun = function (a, b) { return a + b; };
var addReturn = addFun(1, 2);
console.log(addReturn);
