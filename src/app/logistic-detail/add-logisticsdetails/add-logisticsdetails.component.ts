import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LogisticsDetailsService } from 'src/app/services/logistics-details.service';


@Component({
  selector: 'app-add-logisticsdetails',
  templateUrl: './add-logisticsdetails.component.html',
  styleUrls: ['./add-logisticsdetails.component.css']
})
export class AddLogisticsdetailsComponent  {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private ld: LogisticsDetailsService) { 
    this.form = this.formBuilder.group({
      cost: ['', Validators.required],
      libele: ['', [Validators.required]],
      participants: ['', Validators.required],

      
    });
  }

  onSubmit() {
   
    if (this.form.valid) {
      const formData = {
        cost: this.form.value.cost,
        libele: this.form.value.libele,
        participants: this.form.value.participants,
      };
    
      this.ld.create(formData).subscribe(
        response => {
          console.log('Données envoyées avec succès !', response);
          this.form.reset();
        },
        error => {
          console.error('Une erreur s\'est produite lors de l\'envoi des données.', error);
        }
      );
    }
    
  }

}