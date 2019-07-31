import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.createForm();
   }

  createForm() {
    this.registerForm = this._form.group({
      name: new FormControl,
      username: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
      bio: new FormControl,
      profilePic: new FormControl
    });
  }

  onSubmit() {
    this._authService.register(this.registerForm.value).subscribe( () => {
      this._router.navigate(['../login']);
    })
  }

  ngOnInit() {
  }

}
