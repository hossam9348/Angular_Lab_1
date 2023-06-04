import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  todoList : String [] = [];
  inputValue:string="";

  add():void {
    this.todoList.push(this.inputValue)
    this.inputValue="";
  }

  remove(i:any):void {
    this.todoList = this.todoList.filter((todo,index)=> index != i)
  }
}
