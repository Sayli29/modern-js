console.log("Promises in JS");


//Promises Promise is a good way to handle asynchronous operations. 
//It is used to find out if the asynchronous operation is successfully completed or not.



//To create a promise object, we use the Promise() constructor.
//  let promise = new Promise(function(resolve, reject){
//          do something
//  });


const count = true;
let countValue = new Promise(function(resolve, reject){
        if(count){
            resolve("There is count value");
        }
        else{
            reject("There is no count value");
        }
});
console.log(countValue);    //Promise { 'There is count value' }