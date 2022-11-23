import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  getUserEmail: any;
  getUserPassword: any;
  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
  }
  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }
  register() {
    this.getUserEmail = this.registerForm.value.email;
    this.getUserPassword = this.registerForm.value.password;
    this.auth.register(this.getUserEmail, this.getUserPassword);
    this.getUserEmail = '';
    this.getUserPassword = '';
  }

}
