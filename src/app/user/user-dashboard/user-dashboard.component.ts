import { Component, OnInit } from '@angular/core';
import { EventService } from '@app/app/services/event.service';
import { LogisticsDetailsService } from '@app/app/services/logistics-details.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  topEvents: any;
  topUsers : any;
  worstUsers : any;
  newUsers : any;
  lists: any[] = [];
  totality: number = 0;
  constructor(private userService : UserService,private logisticDetailsService : LogisticsDetailsService,private es: EventService) { }

  ngOnInit(): void {

    this.es.getAll().subscribe(data=>{
      if(data){
        debugger
        this.topEvents = data;
      }
    })
    this.userService.findAll().subscribe(data=> {
      if(data){
        this.topUsers = data ;
      }
    })

    this.userService.findAll().subscribe(data => {
      if (data) {
        this.worstUsers = data;
      }
    })
    const d = new Date();
    let month = d.getMonth();
    this.userService.newUsers(month+1).subscribe(data => {
      if (data) {
        this.newUsers = data;
      }
    })

    this.getAllLogisticsDetails();
  }

  calculateTotality(): number {
    let totality = 0;
    for (const logistics of this.lists) {
      const cost = logistics.cost;
      const participants = logistics.participants;
      totality += cost * participants;
    }
    return totality;
  }

  getAllLogisticsDetails() {
    this.logisticDetailsService.getAll().subscribe(
      (res) => {
        this.lists = res;
        this.calculateTotality();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
