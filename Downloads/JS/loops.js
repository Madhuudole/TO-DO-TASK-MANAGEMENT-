//for loop 
// 1 - 10
for(let i=1; i<=10; i++)
{
    console.log(i);
}
console.log("-----");

//for ... of loop

const array = [1,2,3,4,5];
for(const e of array)
{
    console.log(e);
}
console.log("-----");

//
for(let i =0; i<array.length;i++)
{
    console.log(array[i]);
}
console.log("-----");


//while loop

//1 to 10

let p = 1;
while(p<=10){
    console.log(p);
    p++; ++p;
}
console.log("-----");

let l = 2;
while(l<=10){
    console.log(l);
    l=l+2;
}
console.log("-----");

//do -while
let h = 1;
do{
    console.log(h);
    h++;
}
while(h<=10);  
console.log("-----");
//1 to 100 print hi when u see multiple of 5 & break

let num = 0;
while(num <= 100)
{
    console.log(num);
    if(num % 5 == 0)
    { 
        console.log("hi & bye");
        break;     // if break is not present at the moment then it will print 1 - 100  after 5 multiple will print 5
    }
    num++;
}
console.log("-----");

 // for loop on each object
 const user = {
  Name : "Madhu",
  age : 20,
  city : "HYD",
 }
 for (const key in user)
 {
    console.log(key + ":" + user[key]); //user[name]
 }