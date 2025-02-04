import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-choise-hard',
  templateUrl: './city-choise-hard.component.html',
  styleUrls: ['./city-choise-hard.component.scss']
})
export class CityChoiseHardComponent implements OnInit {

  resultCity: string;

  constructor() { }

  ngOnInit(): void {
  }

  choiseResultCity(city: string): void {
    this.resultCity = city;
  }

}
