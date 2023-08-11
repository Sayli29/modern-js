console.log("filter array method");


//filter method is use to filter elements of array
//returns new array


//filter using normal function
//array.filter(function(){})
const arr1 = [1,2,3,4];
const newArr1 = arr1.filter(function(element){
    return element % 2==0;
})
console.log(newArr1);      //[2,4]


//filter using arrow function
//array.filter(()=>{})
const arr2 = [1,2,3,4];
const newArr2 = arr2.filter((element) => element % 2==0);
console.log(newArr2);   //[2,4]  
