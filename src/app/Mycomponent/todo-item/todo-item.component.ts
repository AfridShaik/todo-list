import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import {NgToastService} from 'ng-angular-popup'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  
  constructor(private tost: NgToastService) { }

  ngOnInit(): void {
  }

  onClick(){
    //this.tost.warning({detail:"Deleted",summary:"Your todo list has been deleted",duration:2000})
    console.log("Onlick has been triggred")
  }

}
