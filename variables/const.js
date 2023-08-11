console.log("const");

//const are not constant
//const can be only once declared and intialize
const a = 3;
console.log("value of const a is ", a);  

const b;
// SyntaxError: Missing initializer in const declaration

//const have block scope - { }
//const can be only access inside blocks

{
    const c = 3;
    console.log("value of c inside block ", c)
}

//c cannot be access outside block

console.log(c);     
//ReferenceError: c is not defined






