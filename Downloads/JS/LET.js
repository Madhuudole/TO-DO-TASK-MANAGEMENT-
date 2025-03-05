// let:
//scope : block scoped
//{}

let a ="hey dole";
let time  = 4;
if(time > 3)
{
    let msg = "check out";
    console.log(msg);
}
console.log(a);
//console.log(msg); - its blocking the scope

//two let's len are not allowed like let len = 5
                                     //let len =4     but one len & one var are allowed
             //note: var can be reintiliased & redeclared
                    // but can be reintilzed but cannot be redeclared

let len = 4;
len = 5;
console.log(len);
