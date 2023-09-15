import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogisticsService } from 'src/app/services/logistics.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatelogistics',
  templateUrl: './updatelogistics.component.html',
  styleUrls: ['./updatelogistics.component.css']
})
export class UpdatelogisticsComponent implements OnInit {

  form: FormGroup;
  logisticsId: number = 0;

  constructor(
    private formBuilder: FormBuilder, 
    private logisticsService: LogisticsService, 
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      commentaire: ['', [Validators.required]],
      datelogistic: ['', Validators.required],
      totalCost: ['', [Validators.required]],
      id: [this.logisticsId , ],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.logisticsId = +params['id'];
    });
    this.getByID(this.logisticsId)
  }
  getByID(id: number){
    this.logisticsService.getById(id).subscribe(res =>{
      this.form.patchValue(res)
      console.log(res)
    })
  }
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.logisticsService.update(this.logisticsId, formData).subscribe(
        (res) => {
          console.log('Logistics updated successfully:', res);
          this.router.navigate(['/logistic/list']);
          // Handle success, such as showing a success message or navigating to another page
        },
        (err) => {
          console.error('Error updating logistics:', err);
          // Handle error, such as showing an error message
        }
      );
    }
  }
}
