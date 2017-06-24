import { Component, OnInit } from '@angular/core';
import { GenericDataService } from "app/generics/generic-data.service";
import { User } from "app/interfaces/user";
import { environment } from "environments/environment";

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
    this.userData.getArray(environment.apiUrl + 'users.php').subscribe(users => {
      this.users = users;
    });
  }

}
