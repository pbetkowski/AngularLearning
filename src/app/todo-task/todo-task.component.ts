import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  tasksList = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  removeTask(task: string) {
    this.emitRemove.emit(task);
  }

  completeTask(task: string) {
    this.emitDone.emit(task);
  }

  getColor(): string {
    if (this.tasksList.length % 2 === 0) {
      return 'blue';
    } else {
      return 'red';
    }
  }

}
