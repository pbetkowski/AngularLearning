import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];


  constructor(private taskService: TaskService) {
    this.taskService.getTaskObs().subscribe((m: Array<string>) => {
      this.tasksList = m;  // to co do nas przyszło z serwisu dopisujemy do listy
    });
   }

  ngOnInit() {
  }

  removeTask(task: string) {
    this.taskService.removeTask(task);
  }

  completeTask(task: string) {
    this.taskService.completeTask(task);
  }

  getColor(): string {
    if (this.tasksList.length % 2 === 0) {
      return 'blue';
    } else {
      return 'red';
    }
  }

}
