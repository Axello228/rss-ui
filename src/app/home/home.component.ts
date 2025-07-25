import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CarouselComponent } from '../carousel/carousel.component';
import { ProductCardComponent } from "../product-card/product-card.component";
import { HowWeWorkComponent } from '../how-we-work/how-we-work.component';
import { FloatingButtonComponent } from "../floating-button/floating-button.component";
import { ReviewsComponent } from "../reviews/reviews.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarouselComponent, ProductCardComponent, HowWeWorkComponent, FloatingButtonComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
