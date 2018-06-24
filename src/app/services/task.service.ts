import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable() // przeniesiona funkcjonalnosc z appcomponent
export class TaskService {

  // wypychanie list do komponentow
  // serwis inicjalizuje się szybciej niż komponent
  private tasksListObservable = new BehaviorSubject<Array<Task>>([]);


  constructor() {
    const tasksList =
    [{name: 'Angular', created: new Date().toLocaleString(), isDone: false},
    {name: 'Asp.Net.Core', created: new Date().toLocaleString(), isDone: false},
    {name: 'Java', created: new Date().toLocaleString(), isDone: false},
    {name: 'Android', created: new Date().toLocaleString(), isDone: false},
    {name: '.Net', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
    {name: 'Bębny', created: new Date().toLocaleString(), isDone: false},
    {name: 'C#', created: new Date().toLocaleString(), isDone: false}];
    this.tasksListObservable.next(tasksList.slice());  // konieczne do sortowania przy pure pipe
  }

  add(task: Task) {
    const list = this.tasksListObservable.getValue();
    list.push(task);
    this.tasksListObservable.next(list); // emitujemy listę do innych subskrybentów
  }

  removeTask(task: Task) {
    const list = this.tasksListObservable.getValue().filter(e => e !== task);
    this.tasksListObservable.next(list);
  }

  completeTask(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObservable.getValue();
    // nowe elementy w subjectach
    this.tasksListObservable.next(list);
  }


  selected(task: string): void {
    console.log(task);
  }

  getTaskObs(): Observable<Array<Task>> {
    return this.tasksListObservable.asObservable();
  }

}
