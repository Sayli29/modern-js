console.log("Rest Parameter");

//rest parameter - ...args passed in function
function rest(...args){
    console.log(args);  //[1,2,3]
}
rest(1,2,3) 


//adding numbers using rest parameter
function add(x,y,z){  
    return x+y+z;
}

const num = [1,2,3,4];
const res = add(...num)  //Ignored 4 as here only 3 arguments are required to pass 
console.log(`Adding passed array elements using rest parameter ${res}`);


//Using arrow function above code
const sum = (x,y,z) => x+y+z;
const numbers = [1,2,3,4];
const result = sum(...numbers);
console.log(`Adding passed array elements using rest parameter through arrow function ${result}`);
