import {Component, Input, OnInit} from '@angular/core';
import {one_user_data} from "../../data/users-data";

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.scss']
})
export class UserEmailComponent implements OnInit {
  @Input()
  userEmailInput: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.userEmailInput) {
      //Оставляем
    } else {
      this.userEmailInput = one_user_data.email;
    }
  }

}
