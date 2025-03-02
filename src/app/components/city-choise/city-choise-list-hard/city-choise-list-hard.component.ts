import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {userCityList, users_data} from "../../../data/users-data";
import {IUser} from "../../types/users-list.model";

@Component({
  selector: 'app-city-choise-list-hard',
  templateUrl: './city-choise-list-hard.component.html',
  styleUrls: ['./city-choise-list-hard.component.scss']
})
export class CityChoiseListHardComponent implements OnInit {

  usersList: IUser[] = users_data;

  cityList: string[];

  streetList: string[];

  @Output()
  cityOutput = new EventEmitter<string>();

  @Output()
  streetOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.cityList = this.usersList.map(person => {
      return person.address.city
    });

    this.streetList = this.usersList.map(person => {
      return person.address.street;
    })
  }

  chooseCity(choosenCity: string): void {
    this.cityOutput.emit(choosenCity);
  }

  chooseStreet(choosenStreet: string): void {
    this.streetOutput.emit(choosenStreet);
  }
}
