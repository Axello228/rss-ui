import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Orders } from "../models/orders.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private http: HttpClient) { }

    saveOrder(order: Orders): Observable<any> {
        return this.http.post('http://localhost:3000/orders', order);
    }

    getOrders(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/orders');
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date
            .toLocaleString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            .slice(0, -2);
    }

}