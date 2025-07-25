import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [ MatIconModule]})
export class CarouselComponent {
  currentSlide = 0;
  
  
  slides = [
    {
      titleLine1: 'КАСТОМ - КОТОРЫЙ ВЫДЕЛЯЕТ',
      titleLine2: 'МОЩЬ - КОТОРАЯ РЕШАЕТ',
      tagline: 'ИГРАЙ ПО СВОИМ ПРАВИЛАМ',
      image: '/assets/carousel/slide1.png'
    },
    {
      titleLine1: 'МАКСИМАЛЬНАЯ ПРОИЗВОДИТЕЛЬНОСТЬ',
      titleLine2: 'ДЛЯ САМЫХ ТРЕБОВАТЕЛЬНЫХ',
      tagline: 'ПОБЕЖДАЙ В ЛЮБОЙ ИГРЕ',
      image: '/assets/carousel/slide2.png'
    },
    {
      titleLine1: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД',
      titleLine2: 'ПОД ТВОИ ЗАПРОСЫ',
      tagline: 'СОБИРАЕМ МЕЧТУ',
      image: '/assets/carousel/slide3.png'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}