import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';
import { AssignTaskPageComponent } from './assign-task-page/assign-task-page.component';
import { EditTaskPageComponent } from './edit-task-page/edit-task-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewTaskPageComponent } from './view-task-page/view-task-page.component';

// Defining Custom Routes for Components 
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'addUser',
    component: AddUserPageComponent,
  },
  {
    path: 'assignTask',
    component: AssignTaskPageComponent,
  },
  {
    path: 'viewTask',
    component: ViewTaskPageComponent,
  },
  {
    path: 'editTask',
    component: EditTaskPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})

export class AppRoutingModule {}

