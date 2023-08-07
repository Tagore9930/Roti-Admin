import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  isValid: boolean = false;
  email:any = ""

  resetPassword() {
    this.isValid = true;
  }
}
