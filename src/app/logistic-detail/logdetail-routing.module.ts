import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticDetailComponent } from './logistic-detail.component';
import { AddLogisticsdetailsComponent } from './add-logisticsdetails/add-logisticsdetails.component';
import { LogisticsdetailsListComponent } from './logisticsdetails-list/logisticsdetails-list.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';


const routes: Routes = [
  {
    path:'',component: LogisticDetailComponent,
    children : [
      
      { path: 'add',   component: AddLogisticsdetailsComponent },
      { path: 'list',   component: LogisticsdetailsListComponent },
      { path: 'update/:id',   component: UpdateDetailsComponent },
      
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogdetailRoutingModule {
  static components = [
    LogisticDetailComponent,
    AddLogisticsdetailsComponent,
    LogisticsdetailsListComponent,
    UpdateDetailsComponent,
  ]
 }