import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogisticRoutingModule } from './logistic-routing.module';
import { LogisticsListComponent } from './logistics-list/logistics-list.component';
import { UpdatelogisticsComponent } from './updatelogistics/updatelogistics.component';





@NgModule({
  declarations: [LogisticRoutingModule.components, LogisticsListComponent, UpdatelogisticsComponent],
  imports: [
    CommonModule,
    LogisticRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule


  ]
})
export class LogisticModule { }
