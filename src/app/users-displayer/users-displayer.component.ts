import { Component, OnInit } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-users-displayer',
  templateUrl: './users-displayer.component.html',
  styleUrls: ['./users-displayer.component.css']
})
export class UsersDisplayerComponent implements OnInit {
  users: object;
  usersUpdate: object;
  selectedUser: object;
  editing: boolean = false;
  selectedUserId: number;
  userDetails: object = {
    name: "any",
    email: "any",
  }
  selectedUserCopy: object;
  constructor(private apiFetch: ApiFetchService) { }

  ngOnInit() {
    this.apiFetch.listUsers(1).subscribe(apiFetch => {
      this.users = apiFetch;
      console.log(this.users);
    })
    
  }

  onClick(user) {
    this.selectedUser = user;
    this.selectedUserCopy = this.selectedUser;
  }

  updateUser(id) {
    this.selectedUserId = id;
  }
  update(id, name, email) {
    this.apiFetch.updateUsers(id, name, email).subscribe(apiFetch => {
      this.usersUpdate = apiFetch;
      console.log(this.usersUpdate);
    })
    // this.selectedUser = null;
    this.selectedUserId = null;
    this.apiFetch.listUsers(1).subscribe(apiFetch => {
      this.users = apiFetch;
      // if(this.users.first_name == )
      console.log(this.users);  
    })
  }
}
