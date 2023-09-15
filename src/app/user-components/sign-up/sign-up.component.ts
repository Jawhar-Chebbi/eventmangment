import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user/models/user.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userForm: FormGroup; // variable is created of type FormGroup is created
  constructor(private fb: FormBuilder, private userService: UserService,private router:Router) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }

  onSignUp(){
    if(this.userForm.valid){
      if(this.userForm.get('password').value !== this.userForm.get('confirmPassword').value){
        alert("Veuillez vérifier votre mot de passe !")
        return ;
      }
        let user: User = new User();
        user.firstname = this.userForm.get("firstname").value;
        user.lastname = this.userForm.get("lastname").value;
        user.username = this.userForm.get("username").value;
        user.password = this.userForm.get("password").value;
        user.address = this.userForm.get("address").value;
        this.userService.signUp(user).subscribe(data => {
          if (data) {
            console.log(data)
            this.router.navigate(["/login"]);
          }
        })



    }

  }

}
