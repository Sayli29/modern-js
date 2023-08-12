console.log("Promises in JS");


//Promises Promise is a good way to handle asynchronous operations. 
//It is used to find out if the asynchronous operation is successfully completed or not.


// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected


//To create a promise object, we use the Promise() constructor.
//  let promise = new Promise(function(resolve, reject){
//          do something
//  });


const count1 = true;
let countValue = new Promise(function(resolve, reject){
        if(count1){
            resolve("There is count value");
        }
        else{
            reject("There is no count value");
        }
});
console.log(countValue);    //Promise { 'There is count value' }



//Promise Chaining
// The then() method is used with the callback when the promise is successfully fulfilled or resolved


const count2 = true;
let countVal = new Promise(function(resolve, reject){
    resolve("promise resolved");
});

console.log(countVal);      //Promise { 'Promise resolved' }
countVal
    .then(function res1(val1){
        console.log(val1);
    })
    .then(function res2(){
        console.log("multiple function can be called this way");
    })



//promise with catch and finally
const const3 = false;
let countVal3 = new Promise(function(resolve, reject){
    reject("Promise rejected");
});


countVal3
    //executes when promise is resolved successfully
    .then(function res3(){
        console.log("resolved successfully");
    })

    .catch(function errorval(result){
        console.log(result);
    })

    .finally(function end(){
        console.log("the execution ends here");
    })