import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { ProjectComponent } from './project/project.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRout : Routes = [
  { path: 'home', component: AppHomeComponent, children: [
    { path: ':id', component: ProjectComponent},
    { path: '', component: TaskListComponent}
  ]},
  { path: 'projects', component: ProjectsComponent },
  { path: 'notFound', component: NotFoundComponent},
  { path: 'projects/:id', component: ProjectComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/notFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRout)],
  exports: [RouterModule]
})
export class AppRoutingModule { }