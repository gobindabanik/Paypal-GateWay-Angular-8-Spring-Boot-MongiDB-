package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@Controller
@RequestMapping("/payment")
public class PaypalController {
	
	@Autowired
	PaypalService paypalService;
	
	public static final String SUCCESS_URL = "payment/success";
	public static final String CANCEL_URL = "payment/cancel";
	
	@RequestMapping(value = "/pay", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> make(@RequestBody Order order){
		System.out.println("**********"+order+"********");
		ResponseEntity<?> res = ResponseEntity.ok(new JwtResponse(null, false, "UNAUTHORIZED", null));
		try {
			Payment payment = paypalService.createPayment(order.getPrice(), order.getCurrency(), order.getMethod(),
					order.getIntent(), order.getDescription(), "http://localhost:4200/" + CANCEL_URL,
					"http://localhost:4200/" + SUCCESS_URL);
			for(Links link:payment.getLinks()) {
				System.out.println(link);
				if(link.getRel().equals("approval_url")) {
					System.out.println("000000");
					System.out.println(link.getHref());
					res = ResponseEntity.ok(new JwtResponse(null, true, "URL",link.getHref() ));	
				}
			}
			
		} catch (PayPalRESTException e) {
		
			e.printStackTrace();
		}
	 return res;	
	}
	
	@RequestMapping(value = "/success", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<?>  suc(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId){
		System.out.println("in Suc");
		ResponseEntity<?> res = ResponseEntity.ok(new JwtResponse(null, false, "UNAUTHORIZED", null));
		try {
            Payment payment = paypalService.executePayment(paymentId, payerId);
//            System.out.println(payment.toJSON());
            if (payment.getState().equals("approved")) {
            	 res = ResponseEntity.ok(new JwtResponse(null, true, "URL",payment));
            	
            }
        } catch (PayPalRESTException e) {
         System.out.println(e.getMessage());
        }
		return res;
	}
	
	@RequestMapping(value = "/cancel", method = RequestMethod.GET)
	@ResponseBody
	public void can(){
		System.out.println("in can");
	}
}
