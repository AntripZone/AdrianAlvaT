import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
let systemName:string = "Windows";
let version: number = 25;
let version1: string = "H2";
let userName: string = "AdrianAlvaT"

console.log("==============================");
console.log(systemName + " v"+version+version1);
console.log("Bienvenido, "+userName);
console.log("==============================");

rl.close();
