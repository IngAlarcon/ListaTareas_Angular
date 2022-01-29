//MAnejando la base de datos en este caso el archivo mock-tasks.ts

export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}