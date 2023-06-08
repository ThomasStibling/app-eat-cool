import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';
import { Jwt } from './models/Jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  jwt: Jwt | null = null;

  constructor(private auth: AuthentificationService){
    this.auth.$jwt.subscribe((jwt) => this.jwt = jwt);
  }

  onDeconnexion() {
    this.auth.logout();
  }

}
