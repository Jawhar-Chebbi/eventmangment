import { Component, OnInit } from '@angular/core';
import { LogisticsDetailsService } from 'src/app/services/logistics-details.service';

@Component({
  selector: 'app-logisticsdetails-list',
  templateUrl: './logisticsdetails-list.component.html',
  styleUrls: ['./logisticsdetails-list.component.css']
})
export class LogisticsdetailsListComponent implements OnInit {
  lists: any[] = [];
  totality: number = 0;

  constructor(private ld: LogisticsDetailsService) { }

  ngOnInit(): void {
    this.getAllLogisticsDetails();
  }

  getAllLogisticsDetails() {
    this.ld.getAll().subscribe(
      (res) => {
        this.lists = res;
        this.calculateTotality();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteLogisticsDetails(id: number) {
    this.ld.delete(id).subscribe(
      (res) => {
        console.log('Détail logistique supprimé avec succès!');
        this.getAllLogisticsDetails();
      },
      (err) => {
        console.error('Erreur lors de la suppression du détail logistique:', err);
      }
    );
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
  // performActionOnSelected() {
  //   const selectedItems = this.lists.filter(item => item.selected);
  //   console.log(selectedItems);
  
  //   // Set the logistics_id of selected items to the ID of the last added logistic
  //   // const lastAddedLogistic = this.lists[this.lists.length - 1];
  //   // const lastAddedLogisticId = lastAddedLogistic.id;
  //   //const lastAddedLogisticId = this.logistics[this.logistics.length - 1].id;

  //   //selectedItems.forEach(item => item.logistics_id = lastAddedLogisticId);
  
  //   // Save the changes to the server
  //   this.ld.updateLogisticsDetails(selectedItems).subscribe(
  //     (res) => {
  //       console.log('Details updated successfully!');
  //       // Refresh the list
  //       this.getAllLogisticsDetails();
  //     },
  //     (err) => {
  //       console.error('Error updating details:', err);
  //     }
  //   );
  // }
  
 

}
