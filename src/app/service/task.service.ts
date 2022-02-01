import { Injectable } from '@angular/core';

//IMportando para hacer uso y conexion de mi base de datos
import { HttpClient, HttpHandler} from '@angular/common/http'

import { Observable, of } from 'rxjs';

// Importando mi simulador de base de datos 
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

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


}
