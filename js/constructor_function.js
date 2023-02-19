//constructor functions are used to create objects..
//fun w/o parameters
function f1()
{

}
f1();

//function with parameter
function f2(name,age)
{
    console.log(name);
}

//value passing as a arguments
f2("Mani",35);

function Person1(name1,age1)
{
    this.name = name1;
    this.age = age1;
    //behaviour - function
    this.speak = function()
    {
        console.log(this.name)
    }
}

//Anonymous Property:
var obj1 = new Person1("Sudha",40);
console.log(obj1);

//construc function(es06 version) - prior to es05 version i there is no class..
//relationship between each classes..
//...(3 dot) converted into class
class Account {
    constructor(balance, cusotmerId, type) {
        this.balance = balance;
        this.cusotmerId = cusotmerId;
        this.type = type;

        this.deposit = function (amount) {
            this.balance = this.balance +  amount;
        };
        this.withdrawal = function (amount) {
            this.balance  = this.balance - amount;
        };
        this.getVal = function () {
            console.log("Balace: "+ this.balance);
        };
    }
}

//inheritance
class savingsAccount extends Account{
    constructor(roi){
        this.roi = roi
        this.calculateInterest = function(){
        }
    }
}

class DematAccount extends Account{
//
}

var account1 = new Account(10000,123,"Savings");
account1.getVal();
account1.deposit(500);


class Person{
    constructor(name,age){
        
    }
}

//super concept..
class Animal{
    constructor(tail,legs,species)
    {

    }
}

class Dog extends Animal{
    senseOfSmell; //state
    constructor(tail,legs,species,loyality)
    {
        super(tail,legs,species); //call the constructor of 
        this.loyality = loyality;
    }

    setSenseOfSmell(senseOfSmell)
    {
        this.senseOfSmell = senseOfSmell;
    }

    showDetails() //behaviour
    {
        console.log("sense of semll:"+ this.senseOfSmell);
    }
}

class cow extends Animal{
    givemilk;
}

 var dog = new Dog(true,4,"pug",true);
 dog.setSenseOfSmell("strong");
 dog.showDetails(); //show detials of child class
 
//Classs - we 've relationship..

//Run javascript using node

//study about getter & setter
//supoer,Abstraction,polymorphism,encapsulation - wrapper state/benahcoure