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
  size: string;
}

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})

export class ClothesComponent implements OnInit {
  products: Product[] = []

  formGroup: FormGroup = this.formBuilder.group({
    search: [],
    // sort: this.formBuilder.group({
    //   sortField: [''],
    //   sortOrder: [''],
    //   sortDirection: [''],
    // })
    sort: [],
  })
  sortOrder: number = 0;
  sortField: string = '';

  sortOptions: {label: string, value: string}[]= [
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'}
  ];

  @ViewChild('dv') dataView!: DataView;
  constructor(
    private readonly httpClient: HttpClient,
    private readonly formBuilder: FormBuilder,
    ){}

  ngOnInit() {
    this.httpClient.get<any>('assets/products.json').pipe(tap((products: any)=> {this.products = products.data;})).subscribe();
    this.formGroup.get('search')?.valueChanges.pipe(debounceTime(300)).subscribe((e)=>{this.dataView.filter(e);});
    // this.formGroup.get(['sort', 'sortDirection'])?.valueChanges.subscribe((sortDirection: string)=>{
    //   if (this.formGroup.get(['sort', 'sortDirection'])?.value.indexOf('!') === 0) {
    //       this.formGroup.get('sort')?.patchValue({
    //         sortOrder: -1,
    //         sortField: sortDirection.substring(1, sortDirection.length),
    //       });
    //   }
    //   else {
    //       this.formGroup.get('sort')?.patchValue({
    //         sortOrder: 1,
    //         sortField: sortDirection,
    //       });
    //   }
    // })
  }

  onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value && value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        console.log('2')
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
        console.log('3')
    }

  }
}
