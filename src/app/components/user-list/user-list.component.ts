import { Component, OnInit } from '@angular/core';
import {one_user_data, users_data} from "../../data/users-data";
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
  listAlert(): void{
    alert('Attention')
  }

  showData(person:IUser): void{
    alert(`Имя -${person.name}`);
  }

  protected readonly userCard = one_user_data;
}
