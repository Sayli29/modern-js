console.log("reduce array method");


//reduce method is use to give single output
//return a single value


//reduce using normal function
//array.reduce(function(accumulator, current){}, intialValue)
const arr1 = [1,2,3,4];
const newArr1 = arr1.reduce(function(accumulator, current){
    accumulator = accumulator + current
    return accumulator;
},0)
console.log(newArr1);       //10


//reduce using arrow function
//array.reduce((accumulator, current)=>{}, intialValue)
const arr2 = [1,2,3,4];
const newArr2 = arr2.reduce(function(accumulator, current){
    accumulator = accumulator + current
    return accumulator;
},0)
console.log(newArr2);       //10

