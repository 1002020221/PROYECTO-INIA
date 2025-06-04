// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ContactoComponent } from './features/dashboard/contacto/contacto.component';
import { PedidosComponent } from './features/dashboard/pedidos/pedidos.component';

export const routes: Routes = [
 {
  path: 'login',
  component: LoginComponent
 },

 {
  path: 'dashboard',
  component: DashboardComponent
  // En una app real, aquí añadirías un `canActivate: [AuthGuard]` para proteger esta ruta
 },
 { path:'dashboard/contacto', component: ContactoComponent},
 {
   path: 'dashboard/pedidos', component: PedidosComponent 
 },
 {
  path: '', // Ruta por defecto (URL raíz)
  redirectTo: '/login', // Redirige a la página de login
  pathMatch: 'full' // Coincidencia exacta de la ruta vacía
 },
 {
  path: '**', // Ruta comodín para cualquier otra URL no encontrada
  redirectTo: '/login' // Redirige a login (o a una página 404 si la tienes)
 }
];