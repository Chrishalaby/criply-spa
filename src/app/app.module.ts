import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClothesComponent } from './clothes/clothes.component';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import {RatingModule} from 'primeng/rating';
import {HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    HttpClientModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
