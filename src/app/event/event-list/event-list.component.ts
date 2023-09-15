import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
lists: any[] = [];
  constructor(private es: EventService,private router: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getallevents()
  }
getallevents(){
    this.es.getAll().subscribe((res)=>{
      this.lists = res
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }
}
