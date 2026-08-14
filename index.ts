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
/*const answer = await rl.question("¿Cuál es tu nombre?: ");
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
*/
/*interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tareas: Task[] = [];
let contador = 1;

const addTask  = (title: string): void => {
  const nuevaTask: Task = {
    id: contador,
    title,
    completed: false
  };
  tareas.push(nuevaTask);
  contador++;
  console.log(`Tarea ${nuevaTask.title} agregada con id ${nuevaTask.id}.`);
};

const listTasks  = (): void => {
  if(tareas.length == 0){
    console.log("No hay tareas registradas");
    return;
  }
  for(let i = 0; i < tareas.length; i++){
    const t = tareas[i];
    console.log(`[${t.id}] ${t.title} - ${t.completed ? "completado" : "pendiente"}`);
  }
};

const removeTask = (): void => {
    const eliminar = tareas.pop();
    if (eliminar) {
        console.log(`Tarea eliminada: "${eliminar.title}"`);
    } else {
        console.log("No hay tareas para eliminar");
    }
};

let opcion: number;

do {
    const menu = `
    --- GESTOR DE TAREAS ---
    1.Agregar Tarea
    2.Eliminar ultima tarea
    3.Listar tareas
    4.Salir
`;
    console.log(menu);
    opcion = Number(await rl.question("Elige una opción: "));

    switch (opcion) {
        case 1: {
            const title = await rl.question("Título de la tarea: ");
            addTask(title);
            break;
        }
        case 2:
            removeTask();
            break;
        case 3:
            listTasks();
            break;
        case 4:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
} while (opcion !== 4);
*/
/*
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tarea: Task[] = [];
let idContador = 1;

const addTask = (title: string): void => {
    const newTask: Task = {
        id: idContador,
        title,
        completed: false,
    };
    tarea.push(newTask);
    idContador++;
    console.log(`Tarea "${newTask.title}" agregada con id ${newTask.id}`);
};

const removeTask = (): void => {
    const removed = tarea.pop();
    if (removed) {
        console.log(`Tarea eliminada: "${removed.title}"`);
    } else {
        console.log("No hay tareas para eliminar");
    }
};

const markCompleted = (id: number): void => {
    const task = tarea.find((idTarea) => idTarea.id === id);
    if (task) {
        task.completed = true;
        console.log(`Tarea "${task.title}" marcada como completada.`);
    } else {
        console.log(`No se encontró ninguna tarea con id ${id}.`);
    }
};

const filterPending = (): Task[] => {
    return tarea.filter(({ completed }) => !completed);
};

const filterCompleted = (): Task[] => {
    return tarea.filter(({ completed }) => completed);
};

const imprimirTasks = (taskLista: Task[]): void => {
    if (taskLista.length === 0) {
        console.log("No hay tareas para mostrar");
        return;
    }

    const formatear = taskLista.map((tarea) => {
        const { id, title, completed } = tarea;
        return `${id}. ${title} -> ${completed ? "completed" : "pending"}`;
    });

    formatear.forEach((lista) => console.log(lista));
};

const listTasks = (): void => {
    imprimirTasks(tarea);
};

let opcion: number;

do {
    const menu = `
    --- GESTOR DE TAREAS ---
    1.Agregar Tarea
    2.Eliminar ultima tarea
    3.Listar tareas
    4. Marcar tarea como completada
    5. Ver tareas pendientes
    6. Ver tareas completadas
    7.Salir
`;
    console.log(menu);
    opcion = Number(await rl.question("Elige una opción: "));

    switch (opcion) {
        case 1: {
            const title = await rl.question("Título de la tarea: ");
            addTask(title);
            break;
        }
        case 2:
            removeTask();
            break;
        case 3:
            listTasks();
            break;
        case 4:
            const id = Number (await rl.question("Ingrese el id de la tarea que quiere completar: "));
            markCompleted(id);
            break;
        case 5:
            imprimirTasks(filterPending());
            break;
        case 6:
            imprimirTasks(filterCompleted());
            break;
        case 7:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
} while (opcion !== 7);
*/

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tareas: Task[] = [];
let contador = 1;

const saveToDB = (tareas: Task): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Tarea "${tareas.title}" guardada en la BD.`);
            resolve();
        }, 2000);
    });
};

const addTask = async (title: string): Promise<void> => {
    try {
        if (title.trim() === "") { //Remuevo los espacios
            throw new Error("El título de la tarea no puede estar vacío.");
        }

        const nuevaTarea: Task = {
            id: contador,
            title,
            completed: false,
        };

        await saveToDB(nuevaTarea);

        tareas.push(nuevaTarea);
        contador++;
        console.log(`Tarea "${nuevaTarea.title}" agregada con id ${nuevaTarea.id}.`);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        }
    }
};

const removeTask = (id: number): void => {
    const idTarea = tareas.findIndex((tarea) => tarea.id == id)
    if (idTarea == -1) {
        console.log(`No se encontró una tarea con el id ${idTarea}`);
        return;
    }
    const [removed] = tareas.splice(idTarea, 1);
    console.log(`Tarea eliminada: ${removed.title} con el id: ${removed.id}`);
};

const imprimirTasks = (taskList: Task[]): void => {
    if (taskList.length === 0) {
        console.log("No hay tareas para mostrar.");
        return;
    }

    const formatted = taskList.map((task) => {
        const { id, title, completed } = task;
        return `[${id}] ${title} - ${completed ? "completed" : "pending"}`;
    });

    formatted.forEach((line) => console.log(line));
};

const listTasks = (): void => {
    imprimirTasks(tareas);
};

let opcion: number;

do {
    const menu = `
    ===== GESTOR DE TAREAS =====
    1. Agregar tarea
    2. Eliminar tarea
    3. Listar todas las tareas
    4. Salir
`;
    console.log(menu);
    opcion = Number(await rl.question("Elige una opción: "));

    switch (opcion) {
        case 1: {
            const title = await rl.question("Título de la tarea: ");
            await addTask(title);
            break;
        }
        case 2:
            const id = Number(await rl.question("Ingrese el id de la tarea para eliminar: "));
            removeTask(id);
            break;
        case 3:
            listTasks();
            break;
        case 4:
            console.log("Saliendo del gestor de tareas...");
            break;
        default:
            console.log("Opción no válida, intenta de nuevo.");
            break;
    }
} while (opcion !== 4);


rl.close();
