myFunc()

function myFunc()
{
    document.getElementById("p1").innerHTML = "Changed By JS";
    return 1;
}

function f1()
{

}

var x = 10;
var y = "String";
var z = true;
//var a; undefined
var a = null;

console.log(a);

var res = myFunc();
console.log(res);
//alert(res);
document.write(res);

function onButtonClicked()
{
    //debugger;
    document.getElementById("p1").innerHTML = "Changed By JS1";
}

var emp = {
    name: "Mani",
    id:101,
    salary:20000,
    dob:'05/01/88',
    dept:'IT',
    display: function()
    {
        console.log("display function called!");
    }
}

var emp2 = new Object();
emp2.id = 102;
emp2.name = "Test";
emp.display();
console.log(emp2.name);

