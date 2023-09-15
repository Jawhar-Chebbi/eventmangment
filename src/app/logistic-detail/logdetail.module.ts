import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LogdetailRoutingModule } from './logdetail-routing.module';
import { LogisticDetailComponent } from './logistic-detail.component';
import { LogisticsdetailsListComponent } from './logisticsdetails-list/logisticsdetails-list.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { AddLogisticsdetailsComponent} from './add-logisticsdetails/add-logisticsdetails.component';

@NgModule({
  declarations: [
    LogisticDetailComponent,
    AddLogisticsdetailsComponent,
    LogisticsdetailsListComponent,
    UpdateDetailsComponent],
  imports: [
    CommonModule,
    LogdetailRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LogdetailModule { }