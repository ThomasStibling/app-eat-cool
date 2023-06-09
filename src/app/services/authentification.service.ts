import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Jwt } from '../models/Jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  $jwt: BehaviorSubject<Jwt | null> = new BehaviorSubject<Jwt | null>(null);

  constructor(private http: HttpClient) {
    this.readJwtLocalStorage();
  }

  login(utilisateur: { email: string; password: string }): Observable<boolean> {
    return new Observable<boolean>((resolve) => {
      this.http.post('http://127.0.0.1:4000/users/login', utilisateur).subscribe({
        next: (reponse: any) => {
          localStorage.setItem('jwt', reponse.token);
          localStorage.setItem('userId', reponse.userId);
          this.readJwtLocalStorage();
          resolve.next(true);
          resolve.complete();
        },
        error: (reponse) => {
          resolve.next(false);
          resolve.complete();
        },
      });
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');
    this.$jwt.next(null);
  }

  private readJwtLocalStorage() {
    const jwt = localStorage.getItem('jwt');

    if (jwt != null) {
      const partieDataBase64 = jwt.split('.')[1];
      const partieDataJson = window.atob(partieDataBase64);
      const utilisateurJwt = JSON.parse(partieDataJson);
      this.$jwt.next(utilisateurJwt);
    } else {
      this.$jwt.next(null);
    }
  }
}
