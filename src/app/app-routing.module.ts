import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FoodComponent } from './pages/food/food.component';
import { AddFoodComponent } from './pages/add-food/add-food.component';

const routes: Routes = [
  { path: 'accueil', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'food', component: FoodComponent},
  { path: 'add-food', component: AddFoodComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}