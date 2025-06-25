// src/app/features/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IndiceComponent } from "./indice/indice.component"; // Para *ngFor, *ngIf, etc.

// Interfaz para tipar nuestros productos (opcional pero buena práctica)
interface Product {
 id: number;
 name: string;
 price: number;
 imageUrl: string;
 category: string;
 description?: string; // Descripción opcional
}

@Component({
 selector: 'app-dashboard', // Si lo renombraste, actualiza esto
 standalone: true,  
 imports: [CommonModule, RouterModule, IndiceComponent],
 templateUrl: './dashboard.component.html', // Si lo renombraste, actualiza esto
 styleUrls: ['./dashboard.component.css']  // Si lo renombraste, actualiza esto
})
export class DashboardComponent implements OnInit { // Implementa OnInit

 products: Product[] = []; // Array para almacenar los productos

 constructor(public router: Router) {}

 ngOnInit(): void { // ngOnInit se ejecuta cuando el componente se inicializa
  this.loadProducts();
 }

 loadProducts(): void {
  // Datos de ejemplo
  this.products = [
   {
    id: 1,
    name: 'Queso con oregano',
    price: 15.00,
    imageUrl: 'https://th.bing.com/th/id/OIP.zArW05vkpsePF51d0_xwTAHaFj?cb=iwp2&w=844&h=633&rs=1&pid=ImgDetMain', // Reemplaza con URLs reales o locales
    category: 'Lacteos',
    description: 'Queso de leche fresca con oregano de la mejor calidad de la institucion.'
   },
   {
    id: 2,
    name: 'Yogurt de 1 litro',
    price: 8.00,
    imageUrl: 'https://plansa.pe/wp-content/uploads/2021/11/Plansa-178.jpg',
    category: 'Lacteos',
    description: 'Yogurt refrigerado de alta calidad.'
   },
   {
    id: 3,
    name: 'Queso de 1 kg',
    price: 14.00,
    imageUrl: 'https://th.bing.com/th/id/R.dbf95211419e87c73ba8d15d78454909?rik=%2bFBT45s%2fHyddhQ&pid=ImgRaw&r=0',
    category: 'Lacteos',
    description: 'Sudadera cálida y suave, ideal para los días fríos.'
   },
   {
    id: 4,
    name: 'Yogurt de medio Litro',
    price: 4.50,
    imageUrl: 'https://th.bing.com/th/id/R.1966beaa36adf2c07ae9fc2b80e8e13a?rik=jhzdyUZ6tHMgJA&pid=ImgRaw&r=0',
    category: 'Lacteos',
    description: 'Zapatillas ligeras y transpirables para tus actividades deportivas.'
   },
   {
    id: 5,
    name: 'Litro de Leche',
    price: 3.5,
    imageUrl: 'https://th.bing.com/th/id/OIP.SKpPwxJee7qpGOgTVZ88ngHaLG?cb=iwp2&w=667&h=1000&rs=1&pid=ImgDetMain',
    category: 'Lacteos',
    description: 'leche de 1 litro fresca.'
   },
   {
    id: 6,
    name: 'Manjar blanco',
    price: 5.00,
    imageUrl: 'https://www.tchaucarbo.com/ipx/embed,f_webp,enlarge,s_1200x800,fit_cover/https://www.tchaucarbo.com/images/receitas/doce-de-leite-light-dukan.jpg',
    category: 'Lacteos',
    description: 'Manjar blanco hecho artesanalmente.'
   },
   {
    id: 7,
    name: 'Yogurt afrutado',
    price: 10.00,
    imageUrl: 'https://th.bing.com/th/id/OIP.5hcO0_3uCq6Euk4_engILQHaF7?r=0&rs=1&pid=ImgDetMain',
    category: 'Lacteos',
    description: 'Yogurt con sabor a frutas.'
   },
   {
    id: 8,
    name: 'Matequilla',
    price: 5.00,
    imageUrl: 'https://static.wixstatic.com/media/2c2318_172213047b864899a5cb1c50b372e0a4~mv2.jpg/v1/fit/w_1000%2Ch_667%2Cal_c%2Cq_80/file.jpg',
    category: 'Lacteos',
    description: 'Mantequilla de sabor de leche.'
   },
   {
    id: 9,
    name: 'Suero',
    price: 5.00,
    imageUrl: 'https://th.bing.com/th/id/OIP.M8eBUrnTw88IIA-8d4MQJwHaE7?r=0&rs=1&pid=ImgDetMain',
    category: 'Lacteos',
    description: 'Suero para prepara leche.'
   }
  ];
 }

 viewProductDetails(productId: number): void {
  // En una app real, navegarías a una página de detalles del producto
  // this.router.navigate(['/product', productId]);
  alert(`Ver detalles del producto ID: ${productId} (funcionalidad no implementada)`);
 }

 addToCart(product: Product): void {
  // Lógica para añadir al carrito (no implementada en este ejemplo)
  alert(`Añadido al carrito: ${product.name} (funcionalidad no implementada)`);
 }

 

  public currentYear: number = new Date().getFullYear();
}