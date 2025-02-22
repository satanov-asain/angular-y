import {Component, Input, OnInit} from '@angular/core';
import { IUserAddress} from "../types/users-list.model";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input()
  addressInput: IUserAddress;

  constructor() {}

  ngOnInit(): void {}

}
