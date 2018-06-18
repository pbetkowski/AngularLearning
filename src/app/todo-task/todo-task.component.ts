import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];  // pozwala odniesc sie do pol klasy task


  constructor(private taskService: TaskService) {
    this.taskService.getTaskObs().subscribe((m: Array<Task>) => {
      this.tasksList = m;  // to co do nas przyszło z serwisu dopisujemy do listy
    });
   }

  ngOnInit() {
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  completeTask(task: Task) {
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
