import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Aliment } from 'src/app/models/Aliment';
import { Jwt } from 'src/app/models/Jwt';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.scss'],
})
export class AlimentComponent {
  listeAliment: Aliment[] = [];
  jwt : Jwt | null = null;

  constructor(private http: HttpClient, private auth: AuthentificationService) {
    this.raffraichir();
    this.auth.$jwt.subscribe(jwt => this.jwt = jwt)
  }

  raffraichir() {
    this.http
      .get<Aliment[]>('http://localhost:4000/aliments')
      .subscribe((listeAliment) => (this.listeAliment = listeAliment));
  }

  onSupprimerArticle(idAliment: String) {
    this.http.delete('http://localhost:4000/aliments/' + idAliment).subscribe({
      next: (reponse) => this.raffraichir(),
      error: (reponse) => console.log(reponse),
    });
  }
}
