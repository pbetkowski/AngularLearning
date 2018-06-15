import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newTask: string;
  tasksList: Array<string> = [];
  doneList: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);
  }

  removeTask(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  completeTask(task: string) {
    this.doneList.push(task);
    this.removeTask(task);
  }


  selected(task: string): void {
    console.log(task);
  }
}
