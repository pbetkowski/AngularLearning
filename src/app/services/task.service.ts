import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable() // przeniesiona funkcjonalnosc z appcomponent
export class TaskService {

  private tasksList: Array<string> = [];
  private doneList: Array<string> = [];

  // wypychanie list do komponentow

  private tasksListObservable = new BehaviorSubject<Array<string>>(this.tasksList);
  private doneListObservable = new BehaviorSubject<Array<string>>(this.doneList);

  constructor() {
    this.tasksList = ['Angular', 'Asp.Net.Core', 'Java', 'Android'];
    this.tasksListObservable.next(this.tasksList);
  }

  add(task: string) {
    this.tasksList.push(task);
    this.tasksListObservable.next(this.tasksList); // emitujemy listę do innych subskrybentów
  }

  removeTask(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObservable.next(this.tasksList);
  }

  completeTask(task: string) {
    this.doneList.push(task);
    this.removeTask(task);
    this.doneListObservable.next(this.doneList);
  }


  selected(task: string): void {
    console.log(task);
  }

  getTaskObs(): Observable<Array<string>> {
    return this.tasksListObservable.asObservable();
  }

  getDoneObs(): Observable<Array<string>> {
    return this.doneListObservable.asObservable();
  }
}
