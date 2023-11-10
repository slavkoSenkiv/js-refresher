
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
