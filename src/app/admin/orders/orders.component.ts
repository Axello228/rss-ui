import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { OrderService } from '../../service/order.service';

interface Order {
  id: number;
  name: string;
  phone: string;
  date: string;
}

@Component({
  selector: 'app-orders',
  imports: [NgFor,  NgIf],
  template: `
    <div class="orders-container">
      <h2>Список заявок</h2>
      <button (click)="logout()">Выйти</button>
      
      <table *ngIf="orders.length">
        <tr>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Дата</th>
        </tr>
        <tr *ngFor="let order of orders">
          <td>{{order.name}}</td>
          <td>{{order.phone}}</td>
          <td>{{this.orderService.formatDate(order.date)}}</td>
        </tr>
      </table>
      
      <p *ngIf="!orders.length">Нет заявок</p>
    </div>
  `,
  styles: [`
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 8px; border: 1px solid #ddd; }
  `]
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    })
    // this.orders = [
    //   { id: 1, name: 'Иван', phone: '+79991234567', date: '2023-05-20' },
    //   { id: 2, name: 'Мария', phone: '+79997654321', date: '2023-05-21' }
    // ];
  }

  logout() {
    localStorage.removeItem('admin_auth');
    this.router.navigate(['/admin/login']);
  }
}