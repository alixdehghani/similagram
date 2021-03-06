import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const fullName = 'login';
    this.authService.loginUser({
      email: email,
      password: password,
      fullName:fullName
    })
  }

}
