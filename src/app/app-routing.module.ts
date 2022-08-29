import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClothesComponent } from './clothes/clothes.component';

const routes: Routes = [
  {
    path: '',
    component: ClothesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
