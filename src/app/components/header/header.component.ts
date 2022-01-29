import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'task-list';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("Mensaje Recibido!!!")
  }

}
