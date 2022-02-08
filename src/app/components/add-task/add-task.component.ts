import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../service/ui.service';
import { Subscription } from 'rxjs';

import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();



  //Lo que vamos a recivir del frond end
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length == 0){
      //console.log("onSubmit");
      alert("Please add a task!");
      return;
    }

    //Creando una nueva tareas
    //Una manera mas clara y costa  de crear una tarea
    const {text, day, reminder} = this;
    const newTask = {text, day, reminder};

    /* una forma de crear una tarea capturando los datos
      const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }   */
    console.log("Nueva tarea: ", newTask);
    this.onAddTask.emit(newTask);
  }

}
