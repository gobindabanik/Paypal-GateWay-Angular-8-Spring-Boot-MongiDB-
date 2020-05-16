import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentSucessComponent } from './Components/payment-sucess/payment-sucess.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { StartPaymentComponent } from './Components/start-payment/start-payment.component';
import { PaymentFailureComponent } from './Components/payment-failure/payment-failure.component';
import { LogInComponent } from './Components/log-in/log-in.component';


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'start', component: StartPaymentComponent },
  { path: 'payment/success', component: PaymentSucessComponent },
  { path: 'payment/cancel', component: PaymentFailureComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
