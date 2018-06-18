import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable() // przeniesiona funkcjonalnosc z appcomponent
export class TaskService {

  private tasksList: Array<Task> = [];
  private doneList: Array<Task> = [];

  // wypychanie list do komponentow
  // serwis inicjalizuje się szybciej niż komponent
  private tasksListObservable = new BehaviorSubject<Array<Task>>([]);
  private doneListObservable = new BehaviorSubject<Array<Task>>([]);  // niepotrzebna inicjalizacja

  constructor() {
    this.tasksList =
    [{name: 'Angular', created: new Date()},
    {name: 'Asp.Net.Core', created: new Date()},
    {name: 'Java', created: new Date()},
    {name: 'Android', created: new Date()}];
    this.tasksListObservable.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObservable.next(this.tasksList); // emitujemy listę do innych subskrybentów
  }

  removeTask(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObservable.next(this.tasksList);
  }

  completeTask(task: Task) {
    this.doneList.push(task);
    this.removeTask(task);
    this.doneListObservable.next(this.doneList);
  }


  selected(task: string): void {
    console.log(task);
  }

  getTaskObs(): Observable<Array<Task>> {
    return this.tasksListObservable.asObservable();
  }

  getDoneObs(): Observable<Array<Task>> {
    return this.doneListObservable.asObservable();
  }
}
