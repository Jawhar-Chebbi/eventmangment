// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { LogisticsDetailsService } from 'src/app/services/logistics-details.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-update-details',
//   templateUrl: './update-details.component.html',
//   styleUrls: ['./update-details.component.css']
// })
// export class UpdateDetailsComponent implements OnInit {
//   form: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private ls: LogisticsDetailsService,
//     private route: ActivatedRoute
//   ) {
//     this.form = this.formBuilder.group({
//       libele: ['', [Validators.required]],
//       cost: ['', Validators.required],
//     });
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       const id = params['id'];
//       console.log('ID:', id);
//     });
//   }

//   onSubmit() {
//     console.log(this.form.value);
//     if (this.form.valid) {
//       const id = this.route.snapshot.params['id'];
//       this.ls.update(id, this.form.value).subscribe(
//         response => {
//           console.log('Données mises à jour avec succès !', response);
//         },
//         error => {
//           console.error('Une erreur s\'est produite lors de la mise à jour des données.', error);
//         }
//       );
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogisticsDetailsService } from 'src/app/services/logistics-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  form: FormGroup;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LogisticsDetailsService,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      libele: ['', [Validators.required]],
      cost: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('ID:', this.id);
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      const data = {
        libele: this.form.value.libele,
        cost: this.form.value.cost
      };
      this.ls.update(this.id, data).subscribe(
        response => {
          console.log('Données mises à jour avec succès !', response);
        },
        error => {
          console.error('Une erreur s\'est produite lors de la mise à jour des données.', error);
        }
      );
    }
  }
}
