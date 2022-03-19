import { Component, Input, OnInit, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';
import {NgToastService} from 'ng-angular-popup'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor(private tost: NgToastService) { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    //this.tost.warning({detail:"Deleted",summary:"Your todo list has been del eted",duration:2000})
    this.todoDelete.emit(todo);
    console.log("Onlick has been triggred")
  }

}
