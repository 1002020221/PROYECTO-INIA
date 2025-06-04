import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-indice',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './indice.component.html',
  styleUrl: './indice.component.css'
})
export class IndiceComponent {
  constructor(public router: Router) {}
logout() {
  console.log('Cerrando sesión...');
  this.router.navigate(['/login']);
 }
}
