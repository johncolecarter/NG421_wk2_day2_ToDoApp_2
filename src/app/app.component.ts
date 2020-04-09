import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Todos';
  // todoList: ITodo[] = [];
  // todoTitle: string;
  // todoId = 0;

  constructor(private todoService: TodoService) {

  }
  ngOnInit() {
  }
  // addTodo(): void {
  //   this.todoList.push({
  //     id: this.todoId,
  //     title: this.todoTitle,
  //     description: ''
  //   });

  //   this.todoTitle = '';
  //   this.todoId++;

  // }
  // // resets our todoTitle variable to an empty strin
  // async deleteTodo(todo: any) {
  //   const modal = this.modalService.open(ConfirmationModalComponent);
  //   const component: ConfirmationModalComponent = modal.componentInstance;
  //   component.modalInstance = modal;

  //   const result = await modal.result;

  //   if (result === 'yes') {
  //     const index = this.todoList.findIndex(todoItem => todoItem === todo);
  //     this.todoList.splice(index, 1);
  //   }

}

