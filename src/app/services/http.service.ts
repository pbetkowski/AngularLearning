import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly Url = 'https://api.mlab.com/api/1/databases/db_angular/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'ASwqO1_tEcByVxwPZN4Maaz8O0desscu');
  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.Url, {params: this.param});
  }

  saveTask(list: Array<Task>) {
    this.http.put(this.Url, list, {params: this.param}).subscribe(m => {
      console.log(m);
    });
  }
}
