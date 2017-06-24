import { Component, OnInit } from '@angular/core';
import { GenericDataService } from "app/generics/generic-data.service";
import { User } from "app/interfaces/user";
import { environment } from "environments/environment";
import { TableConfig, ColumnType, Column } from "app/generics/generic-table/generic-table.component";
import { UserModel } from "app/models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  userTableConfig = new TableConfig<UserModel>();

  constructor(
    private userData: GenericDataService<User>
  ) { }

  ngOnInit() {
    this.userData.getArray(environment.apiUrl + 'users.php').subscribe(users => {
      this.users = users;
      this.userTableConfig.items = users.map(user => {
        let newUser = new UserModel();
        newUser.username = user.acct_username;
        newUser.email = user.acct_email;
        newUser.isAdmin = user.auth_admin;
        newUser.lastLogin = new Date(parseInt(user.acct_lastlogin_time)*1000);
        newUser.accountCreated  = new Date(parseInt(user.acct_ctime)*1000);
        return newUser;
      });
    });
    this.buildUsersTable();
  }

  buildUsersTable() {
    this.userTableConfig.headerText = "Users";
    this.userTableConfig.columns = [ 
        new Column(ColumnType.FIELD, "Username", "username"),
        new Column(ColumnType.FIELD, "Email", "email"),
        new Column(ColumnType.FIELD, "isAdmin", "isAdmin"),
        new Column(ColumnType.FIELD, "lastLogin", "lastLogin"),
        new Column(ColumnType.FIELD, "accountCreated", "accountCreated")
    ];
  }
}
