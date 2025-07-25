import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [NgFor],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Алексей',
      avatar: 'assets/reviews/review1.PNG',
      text: 'Отличный сервис! Собрали мощный ПК именно под мои нужды. Все компоненты качественные, работает без нареканий.',
      date: '15.05.2023',
      rating: 5
    },
    {
      name: 'Алексей',
      avatar: 'assets/reviews/review2.PNG',
      text: 'Отличный сервис! Собрали мощный ПК именно под мои нужды. Все компоненты качественные, работает без нареканий.',
      date: '15.05.2023',
      rating: 5
    },
    {
      name: 'Алексей',
      avatar: 'assets/reviews/review3.PNG',
      text: 'Отличный сервис! Собрали мощный ПК именно под мои нужды. Все компоненты качественные, работает без нареканий.',
      date: '15.05.2023',
      rating: 5
    }
   
  ];

  currentOffset = 0;
  startX = 0;
  isDragging = false;
  prevTranslate = 0;

  startDrag(event: MouseEvent | Touch) {
    this.isDragging = true;
    this.startX = event.clientX;
    document.body.classList.add('grabbing');
  }

  onDrag(event: MouseEvent | Touch) {
    if (!this.isDragging) return;
    
    const deltaX = event.clientX - this.startX;
    this.currentOffset = this.prevTranslate + deltaX;
    
    // Ограничение скролла
    const maxOffset = 0;
    const minOffset = -((this.reviews.length - 3) * 380); // Примерная ширина карточки + gap
    
    if (this.currentOffset > maxOffset) {
      this.currentOffset = maxOffset;
    } else if (this.currentOffset < minOffset) {
      this.currentOffset = minOffset;
    }
  }

  endDrag() {
    this.isDragging = false;
    this.prevTranslate = this.currentOffset;
    document.body.classList.remove('grabbing');
    
    // Привязка к ближайшей карточке
    const cardWidth = 380; // Ширина карточки + gap
    this.currentOffset = Math.round(this.currentOffset / cardWidth) * cardWidth;
    this.prevTranslate = this.currentOffset;
  }

  // Навигация стрелками для доступности
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const cardWidth = 380;
    
    if (event.key === 'ArrowLeft') {
      this.currentOffset += cardWidth;
      if (this.currentOffset > 0) this.currentOffset = 0;
    } else if (event.key === 'ArrowRight') {
      this.currentOffset -= cardWidth;
      const minOffset = -((this.reviews.length - 3) * cardWidth);
      if (this.currentOffset < minOffset) this.currentOffset = minOffset;
    }
    
    this.prevTranslate = this.currentOffset;
  }
}