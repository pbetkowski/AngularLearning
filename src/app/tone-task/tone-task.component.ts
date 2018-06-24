import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-tone-task',
  templateUrl: './tone-task.component.html',
  styleUrls: ['./tone-task.component.css']
})
export class ToneTaskComponent implements OnInit {

  doneList: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTaskObs().subscribe((m: Array<Task>) => {
      this.doneList = m.filter(t => t.isDone === true);   // wstrzykujemy dane z serwisu
    });
   }

  ngOnInit() {
  }

}
