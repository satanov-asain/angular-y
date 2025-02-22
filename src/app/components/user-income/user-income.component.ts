import { Component,Input, OnInit } from '@angular/core';
import {IUserCompany} from "../types/users-list.model";

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
