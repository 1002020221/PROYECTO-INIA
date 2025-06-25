// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Importa tus rutas definidas
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { environment } from '../enviroments/environment';

export const appConfig: ApplicationConfig = {
providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    // Configuración de Firebase
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
};

function provideZoneChangeDetection(arg0: { eventCoalescing: boolean; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
   throw new Error('Function not implemented.');
}


function provideClientHydration(arg0: any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
   throw new Error('Function not implemented.');
}


function withEventReplay(): any {
   throw new Error('Function not implemented.');
}


function provideHttpClient(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
   throw new Error('Function not implemented.');
}


function provideFirebaseApp(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
   throw new Error('Function not implemented.');
}


function initializeApp(firebaseConfig: any) {
   throw new Error('Function not implemented.');
}


function provideFirestore(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
   throw new Error('Function not implemented.');
}


function getFirestore() {
   throw new Error('Function not implemented.');
}


function provideStorage(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
   throw new Error('Function not implemented.');
}


function getStorage() {
   throw new Error('Function not implemented.');
}
