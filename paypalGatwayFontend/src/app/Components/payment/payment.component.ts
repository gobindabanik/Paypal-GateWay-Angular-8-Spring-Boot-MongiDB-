import { Component, OnInit } from '@angular/core';
import {Order} from 'src/app/Model/order.model';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PaymentServiceService } from '../../Services/payment-service.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  // newOrder= new Order();
  orderForm: FormGroup;
  errorMsg: any;
  constructor(private _formBuilder: FormBuilder,private paymentServiceService:PaymentServiceService, private router: Router) {
    this.createBlankOrderForm();

   }
   createBlankOrderForm(){  
    this.orderForm = this._formBuilder.group({
      price : [null,[Validators.required]],
      currency : [null,[Validators.required]],
      method : [null,[Validators.required]],
      intent :  [null,[Validators.required]],
      description :  [null,[Validators.required]]
    });
   }
  ngOnInit() {

  }
  onSubmit(){
    console.log(this.orderForm.value);
    if(this.orderForm.invalid){
      console.log("invalid");
      return;
    }
    this.paymentServiceService.newPayment(this.orderForm.value).subscribe(
      res =>{
        console.log(res);
        window.location.href=res.data;
      }
    );  
  }
}
