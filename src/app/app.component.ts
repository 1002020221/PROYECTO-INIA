import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importado

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [
  RouterOutlet // Y listado aquí
 ],
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'stylish-login-app';
}