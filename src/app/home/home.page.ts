import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos: any[] = [];

  constructor(
    private data: DataService,
    private prodService: ProductosService
    ) {
      prodService.getProductos().subscribe((resp: any) => {
        this.productos = resp.productos;
        console.log(this.productos);
      });

    }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }





}
