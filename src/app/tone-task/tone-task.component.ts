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
    this.taskService.getDoneObs().subscribe((m: Array<Task>) => {
      this.doneList = m;   // wstrzykujemy dane z serwisu
    });
   }

  ngOnInit() {
  }

}
