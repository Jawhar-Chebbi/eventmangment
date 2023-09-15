import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogisticsService } from 'src/app/services/logistics.service';
import { LogisticModule } from '../logistique/logistic.module';

@Component({
  selector: 'app-logistic-detail',
  templateUrl: './logistic-detail.component.html',
  styleUrls: ['./logistic-detail.component.css']
})
export class LogisticDetailComponent implements OnInit {
logistics: LogisticModule | undefined;

  constructor(
    private route : ActivatedRoute,
    private logisticsService: LogisticsService
  ) { }

  ngOnInit(): void {
    
  }

}
