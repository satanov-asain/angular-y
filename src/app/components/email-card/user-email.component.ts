import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.scss']
})
export class UserEmailComponent implements OnInit {
  @Input()
  emailInput: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.emailInput) {
      //Оставляем то что пришло из инпута
    } else {
      // Если инпут пустой - подставляем значение-заглушку.
      this.emailInput = 'fakefake@mail.com';
    }
  }

}
