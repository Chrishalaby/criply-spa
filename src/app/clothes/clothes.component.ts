import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

export interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  inventoryStatus: string;
  category: string;
  rating: number;

}

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})

export class ClothesComponent implements OnInit {
  products: Product[] = []
  sortOptions: SelectItem[] = [];
  sortOrder!: number;
  sortField!: string;

  constructor(private primengConfig: PrimeNGConfig, private readonly httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];
  this.primengConfig.ripple = true;
  }
  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
