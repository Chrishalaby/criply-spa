import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';

import { getInitialState, REDUCER_PROVIDER, reducerToken } from '@AppStore';
import { environment } from '@Environment';

import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent } from './clothes/clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducerToken, { initialState: getInitialState }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production }),
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
    ImageModule,
    TagModule,
    SidebarModule,
    MenubarModule,
    InputSwitchModule,
    CardModule,
  ],
  providers: [
    REDUCER_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
