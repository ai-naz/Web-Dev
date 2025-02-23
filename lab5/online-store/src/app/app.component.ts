import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { id: 1, name: 'Cameras' },
    { id: 2, name: 'Lenses' },
    { id: 3, name: 'Accessories' },
    { id: 4, name: 'Bags' }
  ];

  selectedCategoryId: number | null = null;

  onSelectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }
}