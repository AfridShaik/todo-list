import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()  todos: Todo[] ; 
  
  constructor() {
    this.todos = [
      {
        sno:1,
        title: "This 1 is title",
        desc: "Description",
        active: true
      },
      {
        sno:2,
        title: "This 2 is title",
        desc: "Description",
        active: true
      },
      {
        sno:3,
        title: "This 3 is title",
        desc: "Description",
        active: true
      }
    ]
  }

  

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }

}
