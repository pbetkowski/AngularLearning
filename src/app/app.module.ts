import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { ToneTaskComponent } from './tone-task/tone-task.component';
import { TaskService } from './services/task.service';
import { CheckDirective } from './shared/check.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortByNamePipe } from './shared/sort-by-name.pipe';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    ToneTaskComponent,
    CheckDirective,
    DateDirective,
    TransformTaskPipe,
    SortByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
