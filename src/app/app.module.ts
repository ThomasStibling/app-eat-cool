import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlimentComponent } from './pages/aliment/aliment.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Page404Component } from './pages/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditionAlimentComponent } from './pages/edition-aliment/edition-aliment.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './services/jwt.interceptor';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AlimentComponent,
    ConnexionComponent,
    Page404Component,
    EditionAlimentComponent,
    PlanningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
