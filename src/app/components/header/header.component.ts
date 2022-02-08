import { Component, OnInit } from '@angular/core';
//Importamos el ui.service para poder escucharlo
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';

import{Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Task list';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService:UiService, private router:Router) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    //console.log("Mensaje Recibido!!! desde el header padre")
    this.uiService.toggleAddTask();
  }

  hasRouter(route: string){
    return this.router.url === route

  }


}
