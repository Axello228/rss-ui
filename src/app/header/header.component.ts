import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}