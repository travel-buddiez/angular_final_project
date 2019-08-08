import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
 private _username: string;
 private _subscription;
 isLoggedIn;

 constructor(private _authService: AuthService) {
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

}