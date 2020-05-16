import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,private router: Router) { 
    this.createBlankLoginForm();
  }
  createBlankLoginForm(){
    this.loginForm = this._formBuilder.group({
      email : [null],
      password : [null],
    });
  }
  ngOnInit() {

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['start'])
  }
}
