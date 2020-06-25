import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/* export interface Productos {
  id: number,
  clave: string,
  nombreproducto: string,
  descripcion: string,
  precio: number,
  marca: string,
  img: string,
} */

export class ProductosService {

  API = 'https://api-productos-demo.herokuapp.com/api';

  /* public productos: Productos[]; */

  constructor(private _http: HttpClient) { }

  public getProductos() {
    let url = `${this.API}/productos`;
    return this._http.get(url);
  }
}
