import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, tap } from 'rxjs';
import {SelectItem} from 'primeng/api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataView } from 'primeng/dataview';

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
  formGroup: FormGroup = this.formBuilder.group({
    search: []
  })
  @ViewChild('dv') dataView!: DataView;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];
    this.formGroup.get('search')?.valueChanges.pipe(debounceTime(300)).subscribe((e)=>{
      this.dataView.filter(e);
    });
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
