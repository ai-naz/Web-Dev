import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: any;
  @Output() remove = new EventEmitter<number>();

  nextImage(): void {
    if (this.currentImageIndex < this.product.image.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0; // Loop back to the first image
    }
  }

  // Method to show the previous image
  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.product.image.length - 1; // Loop to the last image
    }
  }

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}
