console.log(`spread Operator`);

//spread Operator is ...


const arrValue = ['javascript', 'is', 'fun'];
console.log("Without spread Operator: ", arrValue);         
console.log("With spread Operator: ", ...arrValue);   


//console.log(...arrValue)   is equivalent to   console.log(‘javascript’, ‘is’, ‘fun’)


//copying array using spread operator
const arr1 = ['one','two','three'];
const arr2 = [...arr1, 'four', 'five'];
console.log( arr1);    // ['one', 'two', 'three']
console.log(arr2);     // [ 'one', 'two', 'three', 'four', 'five' ]


//cloning array using spread operator
const arr3 = [1,2,3];
const arr4 = [...arr3];
arr4.push(4);
console.log(arr3);     //[ 1, 2, 3 ]
console.log(arr4);     //[ 1, 2, 3, 4 ]


//spread operator with object
const obj1 = {a:1};
const obj2 = {b:2,c:3};
const obj3 = {...obj1, ...obj2};
console.log(obj3);     //{ a: 1, b: 2, c: 3 }


