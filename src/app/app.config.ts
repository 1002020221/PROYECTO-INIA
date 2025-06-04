// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Importa tus rutas definidas

export const appConfig: ApplicationConfig = {
 providers: [
  provideRouter(routes) // Provee las rutas a la aplicación
  // Aquí podrían ir otros proveedores globales, ej: provideHttpClient()
   ]
};