import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  getUserEmail: any;
  getUserPassword: any;
  // email: string = '';
  // password: string = '';
  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  login() {

    this.getUserEmail = this.loginForm.value.email;
    this.getUserPassword = this.loginForm.value.password;
    this.auth.login(this.getUserEmail, this.getUserPassword);
    this.getUserEmail = '';
    this.getUserPassword = '';
  }

}
