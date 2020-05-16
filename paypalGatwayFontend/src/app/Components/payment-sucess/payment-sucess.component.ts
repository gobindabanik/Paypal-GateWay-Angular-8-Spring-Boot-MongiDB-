import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-sucess',
  templateUrl: './payment-sucess.component.html',
  styleUrls: ['./payment-sucess.component.scss']
})
export class PaymentSucessComponent implements OnInit {

  errorMsg: string;
  paymentId:any;
  PayerID: any;
  subscriptiondata:any;
  constructor(private activeRouter: ActivatedRoute,private router : Router, private paymentService: PaymentService) { }
  
  ngOnInit() {
    this.paymentId = this.activeRouter.snapshot.queryParamMap.get('paymentId');
    const secondParam: string = this.activeRouter.snapshot.queryParamMap.get('token');
    this.PayerID = this.activeRouter.snapshot.queryParamMap.get('PayerID');
    this.getSuccessRequest(this.paymentId,this.PayerID);
    // this.getSuccessRequest(1203,322);
    console.log("***"+this.paymentId+"***"+secondParam+"***"+this.PayerID+"***");
    this.subscriptiondata=this.paymentService.getSubscription(); 
    console.log(this.subscriptiondata);
    
  }

  onClick(){
    this.router.navigate([' ']);
  }

  getSuccessRequest(paymentId,PayerID){
    this.paymentService.getSuccessRequest(paymentId,PayerID).subscribe(
      res=>{
        console.log(res);
        
        if(!res.status || res.status == 401){
          this.errorMsg = "Unauthorized";
        }else{
          if(res.message == "PAYMENT_SUCCESS"){
            this.errorMsg = "";
            console.log(res.data);
            this.updateSubscription(this.subscriptiondata);
          }
        }

      }
    )
  }

  
}
