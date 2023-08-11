console.log("var");

//var variables can be redeclared 
var p = 7;
var p = 2;
//no error
console.log("value of redeclared p ", p);
//shadows earlier declarations

// var have global scope
//var can be access inside and outside blocks
var a = 10;
{
    console.log("Inside block a value is ", a);
}
console.log("Outside block a value is ",a);
console.log("Hence var have global scope");

//var in loops
for(var i=0; i<5; i++){
    console.log("Inside loop i value is ", i);
}
console.log("outside loop i value is accessable as ", i);



