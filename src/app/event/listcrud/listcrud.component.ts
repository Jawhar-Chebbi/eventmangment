import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-listcrud',
  templateUrl: './listcrud.component.html',
  styleUrls: ['./listcrud.component.css']
})

export class ListcrudComponent implements OnInit {

  selectedStatus: string[] = [];
  lists:   any[] = [];
  statusList:   any[] = [];
 

  constructor(private es: EventService,private router: ActivatedRoute) { }

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
  deleteEvent(id:number){
    this.es.delete(id).subscribe(
      (res)=>{
        this.getallevents();
      }
    )
  }
  updateSelectedStatus(event: any) {
    if (event.target.checked) {
      this.selectedStatus.push(event.target.value);
    } else {
      const index = this.selectedStatus.indexOf(event.target.value);
      if (index > -1) {
        this.selectedStatus.splice(index, 1);
      }
    }
    let status:string = ''
    this.selectedStatus.forEach(element => {
      status = status + ','+element
    });
    if(status === ""){
    this.getallevents()  
    }
    else(
      this.es.getEventByStatus(status).subscribe(
        (res)=>{
          this.lists = res
        }
      )
        )
    console.log(status)
  }



  
  selectCategory(event:any){
    console.log(event.target.value)
  this.es.getEventByCategory(event.target.value).subscribe((res)=>{
    this.lists = res 
    console.log(res)
  }
  )  
  
  }

  


}
