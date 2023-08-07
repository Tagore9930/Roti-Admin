import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {

  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    console.log(this.loginForm);

    localStorage.setItem('_token', "abc");
    this.router.navigateByUrl('/dashboard');
  }

  ngOnDestroy(): void {

  }
}
