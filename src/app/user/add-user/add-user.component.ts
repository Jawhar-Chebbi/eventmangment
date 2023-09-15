import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public userForm: FormGroup; // variable is created of type FormGroup is created
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      role: ['', [Validators.required]],
      address: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(mergeMap((params) => {
      if (params["id"]) {
        let id: number = Number.parseInt(params["id"]);
        return this.userService.getUserById(id);
      }
      return of(null);
    })).subscribe((res: User) => {
      if (!res) {
        return;
      }
      this.userForm.patchValue(res);
      this.userForm.get("dateNaissance").setValue(res.dateNaissance);
    })
  }

  onSignUp() {
    debugger
    if (this.userForm.valid) {
      if (this.userForm.get('password').value !== this.userForm.get('confirmPassword').value) {
        alert("Veuillez vérifier votre mot de passe !")
        return;
      }
      let user: User = new User();
      if (user.firstname = this.userForm.get("id").value){
        user.id = user.firstname = this.userForm.get("id").value;
      }
      user.firstname = this.userForm.get("firstname").value;
      user.lastname = this.userForm.get("lastname").value;
      user.username = this.userForm.get("username").value;
      user.password = this.userForm.get("password").value;
      user.address = this.userForm.get("address").value;
      user.dateNaissance = this.userForm.get("dateNaissance").value;
      user.sexe = this.userForm.get("sexe").value;
      user.role = this.userForm.get("role").value;

      if(user.id){
        this.userService.update(user.id,user).subscribe(data => {
          if (data) {
            this.router.navigate(["/user/user-list"]);
          } else {
            alert("Veuillez vérifier vos informations")
          }
        })
      }else{
        this.userService.signUp(user).subscribe(data => {
          if (data) {
            this.router.navigate(["/user/user-list"]);
          } else {
            alert("Veuillez vérifier vos informations")
          }
        })
      }




    }

  }

}
