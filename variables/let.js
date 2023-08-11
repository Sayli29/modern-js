console.log("let");

//let variables cannot be redeclared
let a = 10;
let a = 11;  //SyntaxError: Identifier 'a' has already been declared


// let have block scope - { }
//let can be only access inside blocks

{
    let x = 3;
    console.log("value of x inside block ", x)
}

//x cannot be access outside block

console.log(x);     
//ReferenceError: x is not defined

//let in loops
for(let y=0; y<5; y++){
    console.log("Inside loop i value is ", y);
}

//y cannot be access outside loop

console.log("Outside loop i value is ", y);
//ReferenceError: y is not defined




