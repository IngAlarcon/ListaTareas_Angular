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

}
