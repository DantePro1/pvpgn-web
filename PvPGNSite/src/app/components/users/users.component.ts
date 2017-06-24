import { Component, OnInit } from '@angular/core';
import { GenericDataService } from "app/generics/generic-data.service";
import { User } from "app/interfaces/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];

  constructor(
    private userData: GenericDataService<User>
  ) { }

  ngOnInit() {
    this.userData.getArray("http://localhost/users.php").subscribe(users => {
      this.users = users;
    });
  }

}
