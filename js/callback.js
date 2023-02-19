//take any dataType
function one(param1)
{
    console.log(param1);
    param1("Parameter2");
}

function two(param2)
{
    console.log("two");
    console.log(param2);
}

var obj = {id:1};
 
//one("string1");
//one(1);
//one(obj);
//one(true);

//1st Approach
one(two);

//2nd approcah
one(function two(param2)
{
    console.log("2nd appraoach - one");
    console.log(param2);
})
//two("Parameter2");

//callback - after completion of some task..

function three(var1, callback)
{
    callback(var1);
}

function four(param2)
{
    console.log("function to called");
    console.log(param2)
}

three("callback - paramter1",four);

//single thread
//some js statements
//blocking code - read operation..(JS not wait - 10seconds)/execution not stop - jump into next(Asynchronous/parallel)
//read operation - 
//print data(callback function) - setTimeout/Asynchronous
//soem js statements

//04/02:
//function definition
var x1 = function(z){
    console.log("function" + z);
}

var y = x1("z") //function calling


//JSON - Javascript Object Notation
//CSV
//"Sudha",101,"IT";
//"Sudha1",102,"Finance";

//XML Document
//<name>Sudha</name>
//<empId>101</empId>
//<dept>IT</dept>
//<name>Sudha1</name>
//<empId>102</empId>


//JSON
//emp1 = {name:"Sudha",empid:101,dept:"IT"};
//emp2 = {name:"Sudha1",empid:101,dept:"IT"};

//[emp1,emp2];

//AJAX - asychronous call back




