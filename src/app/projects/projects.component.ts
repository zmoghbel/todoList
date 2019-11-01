import { Component, OnInit } from '@angular/core';
import {ProjectService, project} from '../services/project.service';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Array<project> = new Array<project>();
  newProjectTitle: string;

  constructor(
    private projectService : ProjectService,
    private router : Router,
    private activatedRout : ActivatedRoute
    ) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  onShowProjects(){
    this.router.navigate(["projects"],{ relativeTo : this.activatedRout})
  }

  onNewProject(){
    this.projectService.addNewProject(this.newProjectTitle);
  }

}
