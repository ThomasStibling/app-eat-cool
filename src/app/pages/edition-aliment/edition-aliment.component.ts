import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aliment } from 'src/app/models/Aliment';

@Component({
  selector: 'app-edition-article',
  templateUrl: './edition-aliment.component.html',
  styleUrls: ['./edition-aliment.component.scss'],
})
export class EditionAlimentComponent {
  formulaire: FormGroup = this.formBuilder.group({
    name:['', [Validators.required]],
    calories:['', [Validators.required]],
    lipids:['', [Validators.required]],
    carbohydrate:['', [Validators.required]],
    proteins:['', [Validators.required]],
  });

  alimentModifie?: Aliment;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((parametres) => {
      if (parametres['id'] !== undefined) {
        this.http
          .get<Aliment>('http://localhost:4000/aliments/' + parametres['id'])
          .subscribe({
            next: (aliment) => {
              console.log(aliment);
              this.formulaire.patchValue(aliment);
              this.alimentModifie = aliment;
            },
            error: (reponse) => alert(reponse.error),
          });
      }
    });
  }

  onAjoutAliment() {
    if (this.formulaire.valid) {
      if (this.alimentModifie) {
        const formData: FormData = new FormData();

        formData.append('aliment', JSON.stringify(this.formulaire.value));
        console.log(this.formulaire.value)
        this.http
          .put(
            'http://localhost:4000/aliments/' + this.alimentModifie.id,
            formData
          )
          .subscribe({
            next: (resultat) => this.router.navigateByUrl('/food'),
            error: (reponse) => alert(reponse.error),
          });
      } else {
        const formData: FormData = new FormData();

        formData.append('aliment', JSON.stringify(this.formulaire.value));

        this.http.post('http://localhost:4000/aliments', formData).subscribe({
          next: (resultat) => this.router.navigateByUrl('/food'),
          error: (reponse) => alert(reponse.error),
        });
      }
    }
  }
}