import { Component, OnInit } from '@angular/core';
import { users_data} from "../../data/users-data";
import {IUser} from "../types/users-list.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
usersList: IUser[]= users_data;

  constructor() { }

  ngOnInit(): void {
  }

}
