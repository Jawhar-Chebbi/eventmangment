import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLayoutsComponent } from './container-layouts.component';


const routes: Routes = [
  {
    path:'',component:ContainerLayoutsComponent,
    children : [
      { path:'logistic',loadChildren:() => import('../logistique/logistic.module').then(m => m.LogisticModule)},
      { path:'logisticdetails',loadChildren:() => import('../logistic-detail/logdetail.module').then(m => m.LogdetailModule)},
      { path:'event',loadChildren:() => import('../event/event.module').then(m => m.EventModule)},
      { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContainerLayoutsRoutingModule { }
