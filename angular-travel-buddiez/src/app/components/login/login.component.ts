import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loginForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this._loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    this._authService.login(this._loginForm.value);
    this._router.navigate(['../clicked-continent-page']);
  }

}
