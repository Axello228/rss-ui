import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductCardComponent } from "../product-card/product-card.component";
import { HowWeWorkComponent } from '../how-we-work/how-we-work.component';
import { FloatingButtonComponent } from "../floating-button/floating-button.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { OrderFormComponent } from "../order-form/order-form.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, HowWeWorkComponent, FloatingButtonComponent, ReviewsComponent, OrderFormComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() closed = new EventEmitter<boolean>();

  is_open = false;
  set_open(flag: boolean) {
    this.is_open = flag
  }
}
