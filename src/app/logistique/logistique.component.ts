import { Component, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/services/logistics.service';

interface Logistics {
  id: number;
  totalCost: number;
  commentaire: string;
  datelogistic: Date;
  details: LogisticDetail[]; // Ajoutez cette ligne pour définir la propriété details

}
interface LogisticDetail {
  id: number;
  libele: string;
  cost: number;
}
@Component({
  selector: 'app-logistique',
  templateUrl: './logistique.component.html',
  styleUrls: ['./logistique.component.css']
})
export class LogistiqueComponent implements OnInit {
  logisticsList: Logistics[] = [];

  constructor(private logisticsService: LogisticsService) {}

  ngOnInit(): void {
  }

  calculateTotalCost(): void {
    for (const logistics of this.logisticsList) {
      let totalCost = 0;
      for (const detail of logistics.details) {
        totalCost += detail.cost;
      }
      logistics.totalCost = totalCost;
    }  }

}
