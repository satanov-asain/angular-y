import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {userCityList} from "../../../data/users-data";

@Component({
  selector: 'app-city-choise-list-hard',
  templateUrl: './city-choise-list-hard.component.html',
  styleUrls: ['./city-choise-list-hard.component.scss']
})
export class CityChoiseListHardComponent implements OnInit {

  cityList: string[] = userCityList;

  @Output() cityOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chooseCity(choosenCity: string): void {
    this.cityOutput.emit(choosenCity);
  }
}
