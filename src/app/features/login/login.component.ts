// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { CommonModule } from '@angular/common'; // Para *ngIf, etc.
import { Router } from '@angular/router';   // Para la navegación
import { LoginService } from '../../service/login.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    credentials = {
        email: '',
        password: ''
    };

    constructor(
        private router: Router,
        private loginService: LoginService // Inyecta el servicio de login
    ) { } // Inyecta el Router

    onSubmit() {
        console.log('Intento de login con:', this.credentials);
        // SIMULACIÓN DE LOGIN EXITOSO:
        // En una app real, llamarías a un servicio de autenticación aquí.
        if (this.credentials.email && this.credentials.password) {
            console.log('Login simulado exitoso!');
            // Navega a la ruta '/dashboard'
            this.router.navigate(['/dashboard']);
        } else {
            alert('Por favor, ingresa un email y contraseña válidos.');
        }
    }
    login(){
        if(this.credentials.email && this.credentials.password) {
            this.loginService.login(this.credentials.email, this.credentials.password)
                .then((result) => {
                    console.log('Login exitoso:', result);
                    // Navega a la ruta '/dashboard'
                    this.router.navigate(['/dashboard']);
                }
               )
        }

}

}
