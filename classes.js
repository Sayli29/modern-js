console.log("Classes in javascript");


// class is a blueprint for the object
//creating class

class Person{
    constructor(name){
        //properties
        this.name = name;
    }


    //method declaration
    greet(){
        console.log(`hello kc public! This is ${this.name} :)`);
    }

    //getter method - always return value
    get personName(){
        return this.name;
    }

    //setter method - always set value
    set personName(newName){
        this.name = newName;
    }

}

const person1 = new Person("Tom");
console.log(person1.name);      //Tom
person1.greet();                //hello kc public! This is Tom :)

const person2 = new Person("Jerry");
console.log(person2.name);      //Jerry
person2.greet();                //hello kc public! This is Jerry :)

person2.personName = "merry";
console.log(person2.name);      //merry
person2.greet();
