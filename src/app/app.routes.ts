import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './admin/login/login.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersComponent } from './admin/orders/orders.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: '', component: HeaderComponent},
    { path: 'admin', component: LoginComponent},
    { path: 'admin/orders', component: OrdersComponent}
];
