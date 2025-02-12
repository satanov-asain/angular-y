import { Component } from '@angular/core';
import {one_user_data} from "./data/users-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  protected readonly userCardEmail = one_user_data;
}
