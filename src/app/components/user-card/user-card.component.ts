import { Component, OnInit } from '@angular/core';
import {IUser} from "../types/users-list.model";
import {one_user_data} from "../../data/users-data";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  userCard: IUser = one_user_data;

  constructor() { }

  ngOnInit(): void {
  }

}
