import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
list: any;
id!:number;
  constructor(private es: EventService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id']});
      this.getEvent(this.id);
  }
getEvent(id:number){
  this.es.getById(id).subscribe((res)=>{
    this.list = res
  },(error)=>{
    console.log(error)
  })
}

reservation(){
  this.es.reserve().subscribe((res)=>{
    console.log(res);}
    ,(error)=>{
      console.log(error)
    })
  }

}


