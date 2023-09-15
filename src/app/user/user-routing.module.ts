import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children : [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'add-user/:id', component: AddUserComponent },
      { path: 'add-user', component: AddUserComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  static components = [
    UserComponent,
    UserListComponent,
    AddUserComponent,
    UserDashboardComponent,
    AddUserComponent,
  ]
}
