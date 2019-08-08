import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/UserInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private _userService: UserService, private _router: Router) {
    this._userService.userInfo.subscribe( value => {
      console.log(value)
      this.profile = value 
    })
  }

  ngOnInit() {
    this._userService.getMe();
  }

  deleteProfile() {
    var result = confirm("Are you sure you want to delete?");
    switch (result) {
      case true:
        localStorage.clear();
        this._userService.deleteMe();
        this._router.navigate(['/']);
        break;
      case false:
        this._router.navigate(['profile']);
        break;
    }
  }

}
