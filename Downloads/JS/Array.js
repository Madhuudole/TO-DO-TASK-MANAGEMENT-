// Array Declaration
let array = []; //empty array
let nos = [1,2,3,4,5] // array of no's
let fruits = ["apple","banana","orange"];// array of strings

let lang = ["java","python","sql"];

//1,push
lang.push("Ruby");
console.log(lang);

//2.pop
nos.pop()
console.log(nos);

//3.shift -- removes element at 1st index
fruits.shift()
console.log(fruits);

//4.unshift -- inserts element at 1st , 2nd index
let colors = ['red','green','blue','black','white'];
console.log(colors.length);
colors.unshift('violet','pink');
console.log(colors);
console.log(colors.length);

//5.splice --Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

let animals =['dog','cat','tiger','lion'];
animals.splice(1,1,'bear');
console.log(animals);

//6.slice --includes the first start index value and prints upto the end index value
let pop = [1,2,3,4,5];
let newpop = pop.slice(1,4);
console.log(newpop);

//7.concat -- combine two arrays and join in 1 array
let fruit