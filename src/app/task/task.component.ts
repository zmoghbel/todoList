import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
    //this.task = new Task("تسک!");
  }

}

export class Task {
  private title: string;

  constructor(title: string){
    this.title = title;
  }
}
