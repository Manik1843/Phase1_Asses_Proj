const addTwonum = (num1,num2) => num1 + num2;

//var result =  addTwonum(2,3);

//num as input.
const sqr = num => num * num;
var res = sqr(2);

//console.log(result);
console.log(res);

//work around - before Es6
var obj = {
    id:20,
    counter:function(){
        setTimeout(function(){ 
            this.id++;
            console.log(this.id)}.bind(this),1000);
    }
}

obj.counter();


//it supports in ES6
var obj1 = {
    id:20,
    counter:function(){
        setTimeout(() => {
            this.id++;
            console.log(this.id);
        }
        ,1000);
    }
}

obj1.counter();