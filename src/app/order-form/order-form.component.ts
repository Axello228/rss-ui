import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  @Output() closeForm = new EventEmitter<void>();

  name: string = '';
  phone: string = '';

  constructor(public orderService: OrderService) { }

  onSubmit() {
    this.orderService.saveOrder({
      name: this.name,
      phone: this.phone
    }).subscribe({
      next: () => {
        this.closeForm.emit();
      }
    });
  }

  onClose() {
    this.closeForm.emit();
  }
}