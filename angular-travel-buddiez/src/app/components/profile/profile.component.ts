import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/UserInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private authSerivce: AuthService) {
   }

  ngOnInit() {
    this.profile = (localStorage.getItem('auth_token'));
    console.log(this.profile)
  }

}
