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
   }

  ngOnInit() {
    this.profile = (localStorage.getItem('auth_token'));
    console.log(this.profile)
  }

  deleteProfile(auth_token) {
    this._userService.deleteMe(auth_token);
    this._router.navigate(['/'])
  }

}
