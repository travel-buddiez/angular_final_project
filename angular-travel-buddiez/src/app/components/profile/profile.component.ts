import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private authSerivce: AuthService) {
    this.profile = (localStorage.getItem('profile'));
    console.log(this.profile)
   }

  ngOnInit() {
  }

}
