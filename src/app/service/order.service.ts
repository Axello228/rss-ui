import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Orders } from "../models/orders.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private http: HttpClient){}

    saveOrder(order: Orders): Observable<any> {
        return this.http.post('http://localhost:3000/orders', order);
    }
}