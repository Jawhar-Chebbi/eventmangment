import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLayoutsComponent } from './container-layouts.component';
import { ContainerLayoutsRoutingModule } from './container-layouts-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ContainerLayoutsComponent,
    NavbarComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    ContainerLayoutsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ContainerLayoutsModule { }
