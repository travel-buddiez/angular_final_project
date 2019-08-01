import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
 private _logInForm: FormGroup;
 private _username: string;
 private _subscription;
 isLoggedIn;

 constructor(private _form: FormBuilder, private _authService: AuthService) {
   this.createForm();
   this._subscription = this._authService.userInfo.subscribe( (value) => {
     this._username = value.username;
   });
   this.isLoggedIn = this._authService.isLoggedIn.subscribe( (value) => {
     this.isLoggedIn = value;
   });
   this._authService.isLoggedIn.next(false)
 }

 logout() {
   this._authService.logout();
 }

 ngOnInit() {
 }

 ngOnDestroy() {
   this._subscription.unsubscribe();
   this.isLoggedIn.unsubscribe();
 }

 createForm() {
   this._logInForm = this._form.group({
     email: new FormControl,
     password: new FormControl,
   })
 }
 
 onSubmit() {
   console.log('Login Submitted');
   this._authService.login(this._logInForm.value);
 }
}