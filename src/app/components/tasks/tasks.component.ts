import { Component, OnInit } from '@angular/core';

// Importando mi simulador de base de datos 
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Datos 
  tasks: Task[] = TASKS;


  constructor() { }

  ngOnInit(): void {
  }

}
