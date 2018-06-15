Dziedziczenie:

Klasa nadrzędna html: <app-child [tasks]="tasksList">

klasa podrzędna:

import { Component, OnInit, Input } from '@angular/core'; //zaimportować

@Component({ selector: 'app-child',
templateUrl: './child.component.html', styleUrls: ['./child.component.css'] }) export class ChildComponent implements OnInit {

@Input() tasks; //pozwala wykorzystać element podrzędny w klasie nadrzędnej

######################################### notatki: przykład użycia ngIf i NgFor <ng-container *ngIf="tasksList.length > 0 ; else noTask">

<li *ngFor="let task of tasksList"> {{task}} <button (click)="completeTask(task)" class="btn btn-sm btn-success">Zrobione <button (click)="removeTask(task)" class="btn btn-sm btn-danger">Usuń
<ng-template #noTask>
Brak zadań

######################################## Dziedziczenie i naddziedziczenie

@Input() tasks; <app-child [tasks]="tasksList"> //lista z komponentu podrzędnego i nadrzędnego

########################################

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.