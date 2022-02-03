import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Task} from '../../Task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() 
  task: Task = TASKS[0];
  // Emitiendo la accion que se esta cambiando o queremos cambiar el estado 
  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();
    
  //utilizando icono fortawesome
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  //metodo de borrrar tarea
  onDelete(task: Task){
    //aqui estoy emitiendo esto se esta pasando al componete padre atraves del ouput 
    this.onDeleteTask.emit(task);
    console.log("Tarea a borrar: ", task);
  }

  onToggle(task: Task){
    
    this.onToggleReminder.emit(task);
    console.log(task);

  }



}
