console.log("Destructuring Assignment");

//before ES6
const arr1 = [1,2,3];
const val1 = arr1[0];
const val2 = arr1[1];

console.log(val1);  //1
console.log(val2);  //2


//after ES6
//destructuring in array
const arr2 = [5,6,7];
const [x,y,z,s] = arr2;
console.log(x);     //5
console.log(y);     //6     
console.log(z);     //7
console.log(s);     //undefined


//destructing in object
const obj1 = {
    name: 'Tom',
    age: 23,
    gender: 'male',
}

const {name:assignName, age:assignAge, gender:assignGender} = obj1;
console.log(assignName);
console.log(assignAge);   //23


//default values in destructuring
const arr3 = [2];
const [p, q=3] = arr3;
console.log(p);     //takes value from arr3
console.log(q);     //takes default value


//swap two numbers using destructing
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a);     //20
console.log(b);     //10


//spread operator and destructuring
const arr4 = ['one', 'two','three'];
const [c, ...d] = arr4;

console.log(c)      //one
console.log(d)      //['two','three']


