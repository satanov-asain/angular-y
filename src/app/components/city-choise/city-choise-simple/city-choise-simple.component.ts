import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-choise-simple',
  templateUrl: './city-choise-simple.component.html',
  styleUrls: ['./city-choise-simple.component.scss']
})
export class CityChoiseSimpleComponent implements OnInit {

  resultCity: string;

  constructor() { }

  ngOnInit(): void {
  }

  choiseResultCity(city: string): void {
    this.resultCity = city;
  }

}
