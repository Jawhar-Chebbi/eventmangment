import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { User } from '../../user/models/user.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public userForm: FormGroup; // variable is created of type FormGroup is created
  constructor(private fb: FormBuilder, private userService: UserService,private authenticationService: AuthenticationService, private router:Router) {
    this.userForm = this.fb.group({
      username: null,
      password:null
    });
  }

  ngOnInit(): void {
    this.authenticationService.removeToken();
  }

  onAuthenticate(){
    let user: User = new User() ;
    user.username = this.userForm.get('username').value;
    user.password = this.userForm.get('password').value;
   this.userService.authenticate(user).subscribe(data=>{
    if(data){
      this.authenticationService.setToken(data.token,data.currentUser);
      this.router.navigate(["/event/list"]);


    }else{
      alert("Veuillez vérifier vos informations")
      this.authenticationService.removeToken();
    }
   })
  }

}
