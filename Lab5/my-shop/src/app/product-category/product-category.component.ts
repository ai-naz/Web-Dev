import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  categories = [
    { name: 'Instax mini',
      image: "assets/images/instax_green.jpeg"
    },
    { name: 'Cases',
      image: "assets/images/case_white.jpeg"
     },
    { name: 'Printer',
      image: "assets/images/printer1.png"
     },
    { name: 'Photo Album',
      image: "assets/images/accessories1.png"
    }
  ];

  constructor(private router: Router) {}

  selectCategory(category: any) {
    this.router.navigate(['/category', category.name]); 
  }
}
