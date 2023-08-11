console.log("Inheritance in JS");


//Inheritance in javascript is child class accessing the properties and methods of parent class 
//along with its own property and methods
// In inheritance we use extends keyword


class Car{
    constructor(name){
        //parent class properties
        this.name = name;
        
    }


    //parent class methods
    driveParent(){
        console.log("lets drive the car");
    }
}


class Model1 extends Car{
    constructor(name,speed){
        super(name);
        this.speed = speed;  //child class properties
    }
   
    //child class method
    driveChild(){
        console.log("lets drive model1 car");
    }
    
}

const obj1 = new Model1("Audi",1000);
console.log(obj1.name);
console.log(obj1.speed);

obj1.driveParent();

obj1.driveChild();
