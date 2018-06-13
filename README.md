notatki:
przykład użycia ngIf i NgFor
        <ng-container *ngIf="tasksList.length > 0 ; else noTask">
            <ul>
                <li *ngFor="let task of tasksList">
                    {{task}}
                    <button  (click)="completeTask(task)" class="btn btn-sm btn-success">Zrobione</button>
                    <button (click)="removeTask(task)" class="btn btn-sm btn-danger">Usuń</button>
                </li>
              </ul>
        </ng-container>
        <ng-template #noTask>
          <p>Brak zadań</p>
        </ng-template>

########################################
Dziedziczenie i naddziedziczenie

  @Input()
  tasks;
<app-child [tasks]="tasksList"> //lista z komponentu podrzędnego i nadrzędnego

</app-child>

########################################

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

