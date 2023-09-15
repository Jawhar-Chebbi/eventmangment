import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLayoutsComponent } from './container-layouts/container-layouts.component';
import { AuthGuard } from './security/authguard.guard';
import { SignInComponent } from './user-components/sign-in/sign-in.component';
import { SignUpComponent } from './user-components/sign-up/sign-up.component';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },

  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  {
    path: '',
    component: ContainerLayoutsComponent,
    children: [{
      path: '',
      loadChildren: () => import('./container-layouts/container-layouts.module').then(m => m.ContainerLayoutsModule)
      
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
