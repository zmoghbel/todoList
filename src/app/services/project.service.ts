import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService{
    
    projects : Array<project> = new Array<project>();
    lastIDNumber : number = 0;

    constructor(){
        this.addNewProject("پیش فرض");
    }

    getProjects(){
        return this.projects;
    }

    addTaskToProject(task : Task, projectID : number = 0){
        if(this.projects[projectID] != null && this.projects[projectID] != undefined){
            this.projects[projectID].tasks.push(task)
        } else { //fix later
            this.addNewProject(projectID.toString());
            this.projects[projectID].tasks.push(task);
        }

    }

    addNewProject(projectTitle : string){
        this.projects.push(new project(this.lastIDNumber++,projectTitle));
    }

    addNewTask(title: string, isDone: boolean, projectID: number = 0){
        let newTask = new Task(title, isDone, projectID);
        this.addTaskToProject(newTask, projectID);
    }

    getTasks(projectID : number){
        if(this.projects[projectID] != null && this.projects[projectID] != undefined){
            return this.projects[projectID].tasks;
        } else {
            return null;
        }
    }

    getProjectOfTask(task: Task){
        if(this.projects[task.projectID] != null && this.projects[task.projectID] != undefined)
        return this.projects[task.projectID];
    }

}

export class project{
    public tasks : Array<Task> = new Array<Task>();
    public title : string;
    public id : number;
  
    constructor(id : number, title : string){
      this.id = id;  
      this.title = title;
    }
}


export class Task {
    private title: string;
    public isDone: boolean = false;
    public projectID: number;
  
    constructor(title: string, isDone: boolean, projectID: number){
      this.projectID = projectID;
      this.title = title;
      this.isDone = isDone;
    }
}