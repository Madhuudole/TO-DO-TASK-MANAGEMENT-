var x =10;
function test()
{
   var y = 20; 
}
console.log(x);

//global declaration
var pop = "hi js";

// functional declaration
function rel()
{
    var top = "hello js";
}
rel();
console.log(pop); 
//console.log(top); since top is not defined before

var browser = "chrome";
var browser = "firefox";
browser = "edge" // reintialization
console.log(browser);

//undefined variable
var g;
console.log(g);
// if defined
g = "SOMETHING"
console.log(g);

//issue with var
var flag = "hey madhu";
console.log(flag);
//reintiz
var t1 = 4;
if(t1>3){
    var flag = "hey sri";
}
console.log(flag);