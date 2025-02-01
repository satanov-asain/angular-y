import { Component, OnInit } from '@angular/core';
import {IUser} from "../types/users-list.model";
import {one_user_data} from "../../data/users-data";

@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.scss']
})
export class EmailCardComponent implements OnInit {
  userCardEmail: IUser = one_user_data;
  constructor() { }

  ngOnInit(): void {
  }

  protected readonly userCard = one_user_data;
}
