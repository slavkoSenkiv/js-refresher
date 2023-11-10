
/*
import * as util from './util';
console.log(util.apiKey);
console.log(util.apiKey2); */
import util, { apiKey, apiKey2 as apiKey3} from "./util";
console.log(apiKey3);

const x = 123;
// x = 321; cannot be reassigned

let y = 123;
y = 321; // can be reassigned

console.log(x);
console.log(y);

function greetUser(username, greeting = 'Hello ') {
  console.log(greeting, username);
}

greetUser('Slav');
greetUser('Zoe', 'Whats app ');

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
