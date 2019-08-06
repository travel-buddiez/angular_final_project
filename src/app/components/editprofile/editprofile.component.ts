import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user: any;
  updateForm: FormGroup;

  constructor(private _form: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {

    this._userService.userInfo.subscribe( value => {
      console.log(value);
      this.user = value;
      console.log(this.user)
    });
    this.createForm();
   }
  
  createForm() {
    this.updateForm = this._form.group({
      name: new FormControl,
      username: new FormControl,
      email: new FormControl,
      bio: new FormControl,
    });
  }


  ngOnInit() {
    this._userService.getMe();
  }
   
  onSubmit() {
      console.log(this.updateForm.value)
      this._userService.editMe(this.updateForm.value).subscribe( () => 
      this._router.navigate(['../profile']));     
    } 

}
