import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
 /*let systemName:string = "Windows";
let version: number = 25;
let version1: string = "H2";
let userName: string = "AdrianAlvaT"

console.log("==============================");
console.log(systemName + " v"+version+version1);
console.log("Bienvenido, "+userName);
console.log("==============================");
*/
const answer = await rl.question("¿Cuál es tu nombre?: ");
console.log(`Hola, ${answer}!`);
const tareas: string[] = [];
let opcion : number;
do{
let menu = `
    --- GESTOR DE TAREAS ---
    1.Agregar Tarea
    2.Eliminar ultima tarea
    3.Listar tareas
    4.Salir
`;
console.log(menu);
opcion = Number (await rl.question("Elige una opcion: "));
switch (opcion) {
  case 1:
    const titulo = await rl.question("Titulo de la tarea: ");
    tareas.push(titulo);
    console.log(`Tarea "${titulo}" agregada`);
  break;
  case 2:
    const eliminada = tareas.pop();
    if (eliminada) {
    console.log(`Tarea eliminada: "${eliminada}"`);
    } else { 
    console.log("No hay tareas para eliminar.");
    }
  break;
  case 3:
    if (tareas.length == 0) {
    console.log("No hay tareas registradas");
    } else {console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1}. ${tareas[i]}`);
        }
    }
  break;
  case 4:
    console.log("Saliendo...");
  break;
  default:
    console.log("Opcion no valida");
  break;
  }
} while (opcion !== 4);




rl.close();
