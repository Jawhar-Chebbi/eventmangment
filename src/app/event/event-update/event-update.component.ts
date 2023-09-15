import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
  id!:number
  successMessage: string = '';
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private es: EventService, 
    private route: ActivatedRoute,
    private router: Router,

    ) {
  }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
  })
    this.form = this.formBuilder.group({
      dateEvent: ['', Validators.required],
      dateFinEvent: ['', Validators.required],
      deadLine: ['', Validators.required],
      adressEvent: ['', [Validators.required]],
      organiser: ['', [Validators.required]],
      description: ['', [Validators.required]],
      telNumber: ['', [Validators.required ]],
      ticketPrice: ['', [Validators.required ]],
      nbrParticipant: ['', [Validators.required ]],
      email: ['', [Validators.required ]],
      category: ['', [Validators.required ]],
      eventType: ['', [Validators.required ]],
      status: ['', [Validators.required ]],
      eventTitle: ['', [Validators.required ]],
      budget: ['', [Validators.required ]],
      id: [this.id , ],
    });
    
  this.getByID(this.id);

  
  }
  getByID(id: number){
    this.es.getById(id).subscribe(res =>{
      this.form.patchValue(res)
      console.log(res)
    })
  }
  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      // Appelez votre service de mise à jour (edit) avec les données du formulaire
      this.es.update(this.id,formData).subscribe(
        response => {
          console.log('Données mises à jour avec succès :', response);
          // Affichez un message de succès
          this.successMessage = 'Les données ont été mises à jour avec succès!';
          this.router.navigate(['/event/listcrud']);
        },
        error => {
          console.error('Erreur lors de la mise à jour des données :', error);
        }
      );
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}
