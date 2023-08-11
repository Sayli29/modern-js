console.log("Arrow Function");


//Normal function
function oldFun(){
    console.log("old function");
}
oldFun();


//Arrow Function
const newFun = () => {
    console.log("Arrow function");
}
newFun();


//Arrow function returning value
const sum = (a,b) => {
    return a+b;
}
const res = sum(2,3);
console.log("sum of two num is ", res);


// arrow function in one line
const multi = (a,b)=> a*b;
const result = multi(2,3);
console.log("arrow function in one line and multiplication is ", result);


