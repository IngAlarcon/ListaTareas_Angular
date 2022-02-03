import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../service/task.service';
import {Task} from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Datos 
  tasks: Task[] = [];


  constructor( private taskService: TaskService ) { }

  ngOnInit(): void {
// Like Promise ( esto es comolas promesas como el await )
    this.taskService.getTasks().subscribe((tasks) =>{
      this.tasks = tasks;
    });

  }

  deleteTask(task:Task){
    //llamamos al servicio y deleteTask
    this.taskService.deleteTask(task).subscribe(()=>{
      //filtramos la tarea que borramos para imprimir lo que queda
      this.tasks = this.tasks.filter(t => t.id !== task.id )

    })
  }

  toggleReminder(task: Task){
    console.log(task.reminder);
    //Cambiando el valor desde el fond
    task.reminder = !task.reminder;
    console.log("estado actualizado",task.reminder);
    //Cambiando en la base de datos el estado
    //la logica lo estamos manejando en el componente y luego le pasamos al servicio la tarea ya actualizada para que la guarde
    this.taskService.updateTaskReminder(task).subscribe();


  }

}
