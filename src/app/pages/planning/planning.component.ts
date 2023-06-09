import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aliment } from 'src/app/models/Aliment';
import { Jwt } from 'src/app/models/Jwt';
import { Planning } from 'src/app/models/Planning';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  listeAliments: Aliment[] = [];
  formulaire: FormGroup = this.formBuilder.group({
    date: ['', [Validators.required]],
    typeOfMeal: ['', [Validators.required]],
    aliment: ['', [Validators.required]],
    user:[localStorage.getItem('userId'), [Validators.required]]
});

constructor(
  private formBuilder: FormBuilder,
  private http: HttpClient,
  private router: Router,
  private route: ActivatedRoute
) {
  fetch('http://localhost:4000/aliments/')
  .then((response: Response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La requête a échoué avec le code ' + response.status);
    }
  })
  .then((data: any[]) => {
    data.forEach((item: any) => {
      this.listeAliments.push(item);
    });

  })
}

onAddPlanning(){
  this.route.params.subscribe((parametres) => {
    if (this.formulaire.valid) {
        this.http.post('http://localhost:4000/plannings', this.formulaire.value).subscribe({
          next: (resultat) => this.router.navigateByUrl('/aliment'),
          error: (reponse) => alert(reponse.error),
        });
      }
    });
}
}


