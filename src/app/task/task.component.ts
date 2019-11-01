import { Component, OnInit, Input } from '@angular/core';
import { Task, ProjectService } from '../services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  //@Input() task: Task;
  @Input() task = new Task("1",false, 0);

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  compeleteTask(){
    this.task.isDone = true;
  }

  getProjectTitle(){
    return this.projectService.getProjectOfTask(this.task).title;
  }

  getProjectID(){
    return this.projectService.getProjectOfTask(this.task).id;
  }

}

