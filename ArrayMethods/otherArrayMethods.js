console.log("Other Array methods");


const arr = [1,2,3,4];

//adds element at end
arr.push(5);
console.log(arr);  //[1,2,3,4,5]


//add element at start
arr.unshift(0);
console.log(arr);  //[0,1,2,3,4,5]


//pop removes element from end
arr.pop();
console.log(arr);  //[0,1,2,3,4]


//shift remove element from start
arr.shift();
console.log(arr)  //[1,2,3,4]


//slice gives new array  of slice elements from original array
const newArr = arr.slice(0,2);
console.log(newArr);    //[1,2]
