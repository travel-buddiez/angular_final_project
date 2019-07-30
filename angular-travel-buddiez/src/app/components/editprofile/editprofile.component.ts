import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  private _profileForm: FormGroup;
  profile: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _authService: AuthService, private _fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this._profileForm = this._fb.group({
      email: new FormControl,
      username: new FormControl,
      public_id: new FormControl,
      bio: new FormControl,
      profilePic: new FormControl,
      registered_on: new FormControl,
      modified_at: new FormControl,
     })
   }
   
  onSubmit() {
    this._route.params.subscribe(params => {
      this._authService.editMe(params['auth_token'].subscribe(res => {
        this.profile = res;
      }))
    })
  }

  ngOnInit() {
  }

}
