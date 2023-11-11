
/////////////////////////////////////////////////
// Import
/////////////////////////////////////////////////
/*
import * as util from './util';
console.log(util.apiKey);
console.log(util.apiKey2); */
import util, { apiKey, apiKey2 as apiKey3} from "./util";
console.log(apiKey3);

/////////////////////////////////////////////////
// Variables
/////////////////////////////////////////////////
const x = 123;
// x = 321; cannot be reassigned
let y = 123;
y = 321; // can be reassigned
console.log(x);
console.log(y);

/////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////
function greetUser(username, greeting = 'Hello ') {
  console.log(greeting, username);
}
greetUser('Slav');
greetUser('Zoe', 'Whats app ');
///////////////
let fun = (name, age) => {
  console.log(name + age);
}
fun('slav', 21)
////////////
let fun2 = age => {
  console.log(age);
}
fun2(21)
////////////////
let fun3 = age => {
  return age + 10
}
console.log(fun3(21));
/////////////////////
let fun4 = age =>  age + 10;
console.log(fun4(21));
///////////
let fun5 = age =>  ({old: age});
console.log(fun5);
/////////////////////////////////////////////////
// Arrays
/////////////////////////////////////////////////
const hobbies = ['a', 'b', 'c'];
//console.log(hobbies.findIndex('a')); wrong way to do it
// foloving variant is ok but longer more readable version
/* const index = hobbies.findIndex((item)=>{
  return item === 'b'; // must be === not just =
});
console.log(index); */
// folowing variant is shorter but less readable version
console.log(hobbies.findIndex(item => item === 'b'));
console.log(hobbies.map(item => item + '!'));

