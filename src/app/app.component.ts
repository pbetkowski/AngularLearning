import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  tasksList: Array<string> = [];
  doneList: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['Angular', 'Asp.Net.Core', 'Java', 'Android'];
  }

  add(task: string) {
    this.tasksList.push(task);
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
