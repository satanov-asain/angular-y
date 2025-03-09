import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-choise-hard',
  templateUrl: './city-choise-hard.component.html',
  styleUrls: ['./city-choise-hard.component.scss']
})
export class CityChoiseHardComponent implements OnInit {

  resultCity: string;

  resultStreet: string;

  constructor() { }

  ngOnInit(): void {
  }

  choiseResultCity(city: string): void {
    this.resultCity = city;
  }

  choiseResultStreet(street: string): void {
    this.resultStreet = street;
  }

}
