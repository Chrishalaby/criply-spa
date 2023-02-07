import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DeliveryPolicyComponent } from './delivery-policy/delivery-policy.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { ReturnsAndRefundsPolicyComponent } from './returns-and-refunds-policy/returns-and-refunds-policy.component';
import { TermsAndServiceComponent } from './terms-and-service/terms-and-service.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {
    path: '',
    component: ClothesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'terms-and-service',
    component: TermsAndServiceComponent,
  },
  {
    path: 'privacy-and-policy',
    component: PrivacyAndPolicyComponent,
  },
  {
    path: 'returns-and-refunds-policy',
    component: ReturnsAndRefundsPolicyComponent,
  },
  {
    path: 'delivery-policy',
    component: DeliveryPolicyComponent,
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
  },
  {
    path: 'user-signup',
    component: UserSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
