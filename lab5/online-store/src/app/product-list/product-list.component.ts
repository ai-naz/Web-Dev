import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule, ProductItemComponent], 
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categoryId!: number;

  products = [
    // Cameras
    { id: 1,
      categoryId: 1,
      name: 'Fujifilm instax mini 12 green',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 зеленый',
      price: 65000, rating: 4.7, link: 'https://example.com', image: ['/images/instax_green.jpeg'], likes: 0},
    { id: 2,
      categoryId: 1,
      name: 'Fujifilm instax mini 12 white',
      description: 'Фотокамера моментальной печати Fujifilm instax mini 12 белый',
      price: 65000, rating: 4.9, link: 'https://example.com',
      image: ['/images/instax_white.jpeg'], likes: 0 },
    // Add more products for each category
  ];

  get filteredProducts() {
    return this.products.filter(product => product.categoryId === this.categoryId);
  }
}
