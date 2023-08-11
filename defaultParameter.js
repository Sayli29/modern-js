console.log("Default Parameter");

//Parameters - Inside Function defination
//Arguments -  Outside Function defination


//case 1 : Both arguments passed 
function twoArgsPass(x=1, y=2){
    console.log(x+y);
}
twoArgsPass(3,4);
//Above function will take the passed arguments (3,4) instead of default parameter


//case 2: One agruments passed
function oneArgsPass(x=1,y=2){
    console.log(x+y);
}
oneArgsPass(3);
//Above function will take this passed argument as value of x (3) and y as default parameter value(2)


//case 3: No arguments passed
function noArgs(x=1,y=2){
    console.log(x+y);
}
noArgs();
//Above function will take the default passed parameters


//Above noArgs function code using arrow function
arrowNoArgs = (x=1,y=2) => {
    console.log("using arrow function ", x+y);
}
arrowNoArgs();