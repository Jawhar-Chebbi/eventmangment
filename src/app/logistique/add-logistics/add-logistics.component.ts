import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { LogisticsService } from 'src/app/services/logistics.service';
import { AddLogisticsdetailsComponent} from 'src/app/logistic-detail/add-logisticsdetails/add-logisticsdetails.component';


@Component({
  selector: 'app-add-logistics',
  templateUrl: './add-logistics.component.html',
  styleUrls: ['./add-logistics.component.css']
})

export class AddLogisticsComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private ls: LogisticsService) {
    this.form = this.formBuilder.group({
      commentaire: ['', [Validators.required]],
      datelogistic: ['', Validators.required],
      totalCost: ['', [Validators.required]],
    
    });
   }
  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.ls.create(this.form.value).subscribe(
        Response => {
          console.log('Données envoyées avec succès !', Response);
          this.form.reset();
        },
        error => {
          console.error('Une erreur s\'est produite lors de l\'envoi des données.', error);
        }
      );
    }
  }
 


}
