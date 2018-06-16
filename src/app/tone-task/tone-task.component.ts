import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tone-task',
  templateUrl: './tone-task.component.html',
  styleUrls: ['./tone-task.component.css']
})
export class ToneTaskComponent implements OnInit {

  @Input()
  doneList: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

}
