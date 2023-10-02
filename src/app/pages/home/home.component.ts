import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { IItem } from 'src/app/shared/components/item/models/item.model';
import { ISession } from 'src/app/shared/components/item/models/session.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: IItem[] = [
    {
      name: 'iPhone 15',
      price: 'Precio: $1000',
      stock: 'Stock Disponible: 10 unidades',
      img: 'https://th.bing.com/th/id/OIF.JmdteKhG2pyKXcBrDI8Rmw?pid=ImgDet&rs=1',
      id: 1,
    },
    {
      name: 'Smart Tv Noblex',
      price: 'Precio: $288',
      stock: 'Stock Disponible: 25 unidades',
      img: 'https://pixelstore.com.ar/wp-content/uploads/2021/03/smart-noblex-32.jpg',
      id: 2,
    },
    {
      name: 'Parlante JBL Go',
      price: 'Precio: $38',
      stock: 'Stock Disponible: 64 unidades',
      img: 'https://www.tryhardware.com.ar/wp-content/uploads/2022/08/Parlante-JBL-GO-3-Bluetooth-Grey.jpg',
      id: 3,
    },
  ];

  sesion?: ISession;

  constructor(
    private sessionService: SessionService,
    private router: Router,
  ) {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (!user) {
      this.router.navigate(['/login']);
    }
    this.sessionService.loadSession();
  }

  botonLogin() {
    this.router.navigate(['/login']);
  }

  botonCarrito() {
    this.router.navigate(['/carrito']);
  }
}
