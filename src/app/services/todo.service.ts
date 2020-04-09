import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  title = 'Todos';
  todoList: ITodo[] = [];
  todoId = 0;

  constructor(private modalService: NgbModal) {

  }

  getTodoList() {
    return this.todoList;
  }

  addTodo(todoTitle): void {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: ''
    });

    this.todoId++;

  }
  // resets our todoTitle variable to an empty strin
  async deleteTodo(todo: any) {
    const modal = this.modalService.open(ConfirmationModalComponent);
    const component: ConfirmationModalComponent = modal.componentInstance;
    component.modalInstance = modal;

    const result = await modal.result;

    if (result === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }

  }
}
