import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentComponent } from './pages/aliment/aliment.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditionAlimentComponent } from './pages/edition-aliment/edition-aliment.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'aliment', component: AlimentComponent },
  { path: 'connexion', component: ConnexionComponent },
  {
    path: 'ajout-aliment',
    component: EditionAlimentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'modifier-article/:id',
    component: EditionAlimentComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'aliment', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
