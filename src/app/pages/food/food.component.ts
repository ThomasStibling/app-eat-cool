import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent {
  dataSource = [
    { name: 'Fraise', calorie: 25, lipid: 15, carbohydrate: 10, protein: 30 },
    { name: 'Poire', calorie: 30, lipid: 20, carbohydrate: 15, protein: 40 },
    { name: 'Carotte', calorie: 60, lipid: 30, carbohydrate: 25, protein: 55 },
  ];

  displayedColumns: string[] = ['name', 'calorie', 'lipid', 'carbohydrate', 'protein'];
}
