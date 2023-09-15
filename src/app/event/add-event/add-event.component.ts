import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent{
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private es: EventService) {
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

    });
  }
  ngOnInit(): void {
  }
  successMessage: string = '';

  showSuccessMessage() {
    this.successMessage = 'L\'élément a été ajouté avec succès !';
    // Réinitialiser le message après un certain délai si nécessaire
    setTimeout(() => {
      this.successMessage = '';
    }, 3000); // Efface le message après 3 secondes
  }
  onSubmit() {
    console.log(this.form)
    if (this.form.valid) {
      this.es.create(this.form.value).subscribe(
        response => {
          this.showSuccessMessage();
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

