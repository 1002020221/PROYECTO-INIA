// En pedidos.module.ts o app.module.ts
import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IndiceComponent } from "../indice/indice.component";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  imports: [IndiceComponent]
})
export class PedidosComponent {
viewPedidoDetails(arg0: any) {
throw new Error('Method not implemented.');
}  // <-- Esta línea es crucial
  // ... tu código
}

@NgModule({
  imports: [
    // ...otros imports
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  // ...
})
export class PedidosModule {} // o AppModule