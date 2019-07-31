import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  profile: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {
   }

  ngOnInit() {
  }
   
  onSubmit() {
      this._userService.editMe(this.profile).subscribe( () => 
      this._router.navigate(['../profile']));     
    }
  

  deleteUser(profile) {
    this._userService.deleteMe(this.profile).subscribe( () =>
    this._router.navigate(['../landing']));
  }

}
