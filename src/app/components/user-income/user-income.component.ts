import { Component,Input, OnInit } from '@angular/core';
import {one_user_data} from "../../data/users-data";
import {IUser, IUserCompany} from "../types/users-list.model";

@Component({
  selector: 'app-user-income',
  templateUrl: './user-income.component.html',
  styleUrls: ['./user-income.component.scss']
})
export class UserIncomeComponent implements OnInit {
 // userData: IUser = one_user_data;

  @Input()
  userCompany!: IUserCompany;

  constructor() { }

  ngOnInit(): void {
  }

}
