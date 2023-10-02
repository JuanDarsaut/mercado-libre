import { Component, Input, OnInit } from '@angular/core';
import { IItem } from './models/item.model';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: IItem;

  constructor(
    private router: Router,
    private ItemService: ItemService,
  ) {}

  goItem(id: number) {
    this.router.navigate(['/home/specs-item', id]);
  }
}
