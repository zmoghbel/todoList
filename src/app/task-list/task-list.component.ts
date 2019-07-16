import { Component, OnInit } from '@angular/core';
import {Task} from '../task/task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks : Array<Task> = new Array<Task>();

  constructor() { }

  ngOnInit() {
    for(let i=0; i<10; i++){
      this.tasks.push(new Task('تسک شماره '+ i));
    }
  }

}
