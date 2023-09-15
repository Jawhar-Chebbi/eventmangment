import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogisticsService } from 'src/app/services/logistics.service';

@Component({
  selector: 'app-affecter-event',
  templateUrl: './affecter-event.component.html',
  styleUrls: ['./affecter-event.component.css']
})
export class AffecterEventComponent implements OnInit {
affectedList:any[]=[]
idLogistic !: number
idEvent : number =  this.route.snapshot.params['idEvent']
  constructor(
    private ls :LogisticsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllLogistics()

    console.log(this.idEvent)
  }
  getAllLogistics() {
    this.ls.getAll().subscribe(
      (res) => {
        console.log(res)
        this.affectedList = res;
        this.affectedList.forEach(element => {
          if(element.event.id == this.idEvent){
            this.idLogistic = element.id
            return
          }
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  saveChanges(){
    debugger
    this.ls.affecterEvent(this.idEvent,this.idLogistic).subscribe((res)=>
    console.log(res))
  }
}
