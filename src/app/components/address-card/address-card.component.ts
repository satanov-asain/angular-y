import {Component, Input, OnInit} from '@angular/core';
import { IUserAddress} from "../types/users-list.model";

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @Input()
  addressInfo!: IUserAddress;

  constructor() { }

  ngOnInit(): void {
  }

}
