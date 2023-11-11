
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
//const hobbies = ['a', 'b', 'c'];
//console.log(hobbies.findIndex('a')); wrong way to do it
// foloving variant is ok but longer more readable version
/* const index = hobbies.findIndex((item)=>{
  return item === 'b'; // must be === not just =
});
console.log(index); */
// folowing variant is shorter but less readable version
console.log(hobbies.findIndex(item => item === 'b'));
console.log(hobbies.map(item => item + '!'));
const hobbies = ['a', 'b', 'c'];
console.log(hobbies.map(item => ({key: item}))); // returned object has to be wrapped in brekets otherwise JS consider it to be a function
/////////////////////////////////////////////////
// Destructuring
/////////////////////////////////////////////////
const tesArr = ['Slav', 'Senkiv'];
const [fname, lname] = tesArr;
const [fname2, lname2] = ['Slav2', 'Senkiv2'];
console.log(fname, lname);
console.log(fname2, lname2);

const user = {
  name: 'slav3',
  age: 33
}

const { name, age } = user;
const { name: name3, age: age3 } = user;

const {name4, age4} = {
  name4: 'slav4',
  age4: 44
}
console.log(name, age);
console.log(name3, age3);
console.log(name4, age4);

function logUser1(someUser){
  console.log(someUser.name, someUser.age);
}
function logUser2({name, age}){
  console.log(name, age);
}
const user2 = {
  name: 'slav3',
  age: 33
}

logUser1(user2);
logUser2(user2);
/////////////////////////////////////////////////
// Spread operator
/////////////////////////////////////////////////

const hobbies2 = ['a', 'b', 'c'];
const hobbies3 = ['d'];
const hobbies4 = hobbies2 + hobbies3; // output = a,b,cd
const hobbies5 = [...hobbies2, ...hobbies3] // output is correct
console.log(hobbies4);
console.log(hobbies5);

const user3 = {
  name: 'slav3',
  age: 33
}
console.log(user3);

const extendedUser = {
  isAdmin: true,
  ...user3
}
console.log(extendedUser);
/////////////////////////////////////////////////
// Control structures & in vs of for loops 
/////////////////////////////////////////////////
console.log('arr / of');
const hobbies6 = ['a', 'b', 'c'];
for (let hobbie of hobbies6) { // of - returns values
  console.log(hobbie + '!');
}
console.log('arr / in');
const hobbies7 = ['a', 'b', 'c'];
for (let hobbie in hobbies7) { // in - returns keys
  console.log(hobbie + '!');
}