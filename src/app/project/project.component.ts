import { Component, OnInit } from '@angular/core';
import { ProjectService, Task, project } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  tasks : Array<Task> = new Array<Task>();
  project : project;

  constructor(
    private projectService : ProjectService,
    private activatedRouter : ActivatedRoute) { }

  ngOnInit() {
    let id:number = +this.activatedRouter.snapshot.params['id'];
    console.log(id);
    this.tasks = this.projectService.getTasks(id);
  }

}
