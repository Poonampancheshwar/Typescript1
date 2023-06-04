console.log('this is my fisrt typescript project');

const fun1 = () => {
const a:number = 40;
const b:string = '20';
const add = a+b;
console.log(add);
};
fun1();


const addFun = (a,b) => a+b;
const addReturn = addFun(1,2);
console.log(addReturn);
