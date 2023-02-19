function myAsynFunction(name)
{
    //callback();
    var promise = new Promise(function(resolve,reject){
        if(name == "Mani")
        {
            resolve();
        }
        else
        {
            reject();
        }
    })
    return promise;
}

function resolvepromise()
{
    console.log("Promise Resolved");
}

function rejectpromise()
{
    console.log("promise rejected");
}

//First Approach
//myAsynFunction("Mani").then(resolvepromise).catch(rejectpromise);

//Second Approach
//myAsynFunction("Mani").then(function(data){
//    console.log(data);
//}).catch(function(data){
//    console.log(data);
//});

myAsynFunction("Mani").then(data => console.log(data),error => console.log(error));
//Arrow Function
myAsynFunction("Mani").then(data => console.log(data)).catch(data => console.log(data));



//myAsynFunction("Mani").then(resolvepromise,rejectpromise);

