import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/app/security/authentication.service';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : User[];
  constructor(private userService: UserService,private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
   this.initData();
  }

  deleteUser(id : number){
    let text = "Veuillez confirmer la suppression de l'utilisateur";
    if (confirm(text) == true) {
      this.userService.deleteUser(id).subscribe(data => {
        if (data) {
          this.initData();
          alert("User deleted successfully")
        }
      })
    } else {
    }

  }

  navigateToUser(id: number) {
    this.userService.getUserById(id).subscribe(data => {
      if (data) {
        this.router.navigate(["/user/add-user/"+id]);
      }
    })
  }

  initData(){
    this.userService.findAll().subscribe(data => {
      if (data) {
        this.userList = data;
        let userId = this.authenticationService.getCurrentUser();
        this.userList = this.userList.filter(user => user.id !== +userId);
      }
    })
  }

}
