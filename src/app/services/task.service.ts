import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpService } from './http.service';

@Injectable() // przeniesiona funkcjonalnosc z appcomponent
export class TaskService {

  // wypychanie list do komponentow
  // serwis inicjalizuje się szybciej niż komponent
  private tasksListObservable = new BehaviorSubject<Array<Task>>([]);


  constructor(private service: HttpService) {
    this.service.getTasks().subscribe(m => {
      this.tasksListObservable.next(m);
    });
    // const tasksList = [];
    // this.tasksListObservable.next(tasksList.slice());  // konieczne do sortowania przy pure pipe
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

  saveTaskInDb() {
    this.service.saveTask(this.tasksListObservable.getValue());
  }

}
