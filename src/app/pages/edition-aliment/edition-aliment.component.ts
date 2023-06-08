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
    title: ['', [Validators.required]],
    body: ['', [Validators.required, Validators.minLength(5)]],
  });

  alimentModifie?: Aliment;
  fichierSelectionne: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((parametres) => {
      if (parametres['id'] !== undefined) {
        this.http
          .get<Aliment>('http://localhost:3000/aliments/' + parametres['id'])
          .subscribe({
            next: (article) => {
              this.formulaire.patchValue(article);
              this.alimentModifie = article;
            },
            error: (reponse) => alert(reponse.error),
          });
      }
    });
  }

  onAjoutArticle() {
    if (this.formulaire.valid) {
      if (this.alimentModifie) {
        const formData: FormData = new FormData();

        formData.append('article', JSON.stringify(this.formulaire.value));

        this.http
          .put(
            'http://localhost:4000/aliments/' + this.alimentModifie.id,
            formData
          )
          .subscribe({
            next: (resultat) => this.router.navigateByUrl('/accueil'),
            error: (reponse) => alert(reponse.error),
          });
      } else {
        const formData: FormData = new FormData();

        formData.append('article', JSON.stringify(this.formulaire.value));

        if (this.fichierSelectionne) {
          formData.append('fichier', this.fichierSelectionne);
        }

        this.http.post('http://localhost:4000/aliment', formData).subscribe({
          next: (resultat) => this.router.navigateByUrl('/accueil'),
          error: (reponse) => alert(reponse.error),
        });
      }
    }
  }
}
