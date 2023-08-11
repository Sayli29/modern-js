console.log("Array map method");


//map method is used to transform the array
//returns new array


//map method using normal function
//array.map(function(){})
const arr1 = [1,2,3,4];
const newArr1 = arr1.map(function(element){
    return element*2
})
console.log(newArr1)    //[2,4,6,8]


//map method using arrow function
//array.map(()=>{})
const arr2 = [1,2,3,4];
const newArr2 = arr2.map((element)=>element*2);
console.log(newArr2)     //[2,4,6,8]