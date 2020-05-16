import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PaymentSucessComponent } from './Components/payment-sucess/payment-sucess.component';
import { StartPaymentComponent } from './Components/start-payment/start-payment.component';
import { PaymentFailureComponent } from './Components/payment-failure/payment-failure.component';
import { LogInComponent } from './Components/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentSucessComponent,
    StartPaymentComponent,
    PaymentFailureComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
