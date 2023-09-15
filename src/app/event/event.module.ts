import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ListcrudComponent } from './listcrud/listcrud.component';
import { EventUpdateComponent } from './event-update/event-update.component';

@NgModule({
  declarations: [EventRoutingModule.components, ListcrudComponent, EventUpdateComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventModule { }
