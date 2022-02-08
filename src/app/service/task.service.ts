import { Injectable } from '@angular/core';

//IMportando para hacer uso y conexion de mi base de datos
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'

import { Observable, of } from 'rxjs';

// Importando mi simulador de base de datos 
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

//esto es para mandar un json a mi servidor se usa cuando actualizo un estado
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //Definiendo una cosntante para guardar la url del servidor
  private apiUrl = 'http://localhost:5100/tasks';

  constructor(private http:HttpClient) {

   }

  getTasks(): Observable<Task[]>{
    //const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }

//Metodo borrar una tarea en la base de datos usando  .delete
  deleteTask(task:Task): Observable<Task> {
    const url= `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);

  }
  //Actualizando el reminder en la BD usando .put
  updateTaskReminder(task:Task): Observable<Task> {
    const url= `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);// esto es para inf al backend que lo que estamos mandando es un json

  }

  //RECIBE UNA TAREA PARA GUARDAR EN LA BASE DE Datos
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
