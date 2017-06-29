import { Component, Input } from '@angular/core';

import { Product } from "./product";

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})

export class ProductTableComponent {
    @Input() products: Product[];
}