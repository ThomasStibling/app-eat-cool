import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  formulaire: FormGroup = this.formBuilder.group({
    date: ['', [Validators.required]],
    typeOfMeal: ['', [Validators.required]],
    aliment: ['', [Validators.required]]
})
}
