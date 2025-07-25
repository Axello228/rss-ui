import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productTitle: string = '';
  @Input() productPrice: string = '';
  @Input() productImage: string = '';
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }
}