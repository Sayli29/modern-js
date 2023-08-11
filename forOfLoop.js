console.log("for...of loop");


//for...of loop gives the element
const arr = [1,2,3,4];
console.log("for of loop");
for(let element of arr){
    console.log(element);
}


//for...in loop gives the index
console.log("for in loop");
for(let element in arr){

    console.log(`element at ${element} index is ${arr[element]}`);

}
