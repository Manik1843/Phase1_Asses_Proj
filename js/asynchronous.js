var getTodo = function()
{
    setTimeout(function(){
        console.log("first statement");
        //console.log("second statement");
    },2000);

    console.log("after Timeout");

    setTimeout(function(){
        console.log("second statement");
    },1000);
}

getTodo();

//Asynchronmus - don't wait data for the server to complete
//Immediatly return  - normal function..
var getTodo1 = function(){
    setTimeout(function(){
        return { Text: 'Server Response'}
    },1000);
}

getTodo1();

var getTodo2 = function(callback){
    setTimeout(function(){
        //getting data from server and calling callback function
       callback({Text: 'Server Response'}); //only after be received
    },1000);
};

//wait for the data to complete - Synchronous
function printData(data)
{
    console.log(data.Text);
}



//Annoynius function - w/o name
//First Approach;
//getTodo2(printData);

//second way:
getTodo2(function(data)
{
    console.log(data.Text);
})

//callback function inside callback function inside => 
//callbackHelp overcomde that issue - we used the concept of promise

