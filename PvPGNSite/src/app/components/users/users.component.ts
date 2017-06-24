import { Component, OnInit } from '@angular/core';
import { GenericDataService } from "app/generics/generic-data.service";
import { User } from "app/interfaces/user";
import { environment } from "environments/environment";
import { TableConfig, ColumnType } from "app/generics/generic-table/generic-table.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  userTableConfig = new TableConfig<User>();

  constructor(
    private userData: GenericDataService<User>
  ) { }

  ngOnInit() {
    this.userData.getArray(environment.apiUrl + 'users.php').subscribe(users => {
      this.users = users;
      this.userTableConfig.items = users;
    });
    this.buildUsersTable();
  }

  buildUsersTable() {
    this.userTableConfig.headerText = "Users";
    this.userTableConfig.columns = [ 
        {columnType: ColumnType.FIELD, header: "Username", field: "acct_username", link: {route: "containerLink"}, sortable: true },
        {columnType: ColumnType.FIELD, header: "Email", field: "acct_email", sortable: true}
    ];
  }

}
