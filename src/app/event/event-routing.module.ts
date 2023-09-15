import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { ListcrudComponent } from './listcrud/listcrud.component';
import { EventUpdateComponent } from './event-update/event-update.component';

const routes: Routes = [
  {
    path:'',component:EventComponent,
    children : [
      { path: 'list',component: EventListComponent },
      { path: 'add',   component: AddEventComponent },
      { path: 'details/:id',   component: EventDetailsComponent },
      { path: 'listcrud',   component: ListcrudComponent },
      { path: 'update/:id',   component: EventUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
  static components = [
    EventComponent,
    AddEventComponent,
    EventDetailsComponent,
    EventListComponent,
    EventUpdateComponent
  ]
}
