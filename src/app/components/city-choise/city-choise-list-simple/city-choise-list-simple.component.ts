import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-city-choise-list-simple',
  templateUrl: './city-choise-list-simple.component.html',
  styleUrls: ['./city-choise-list-simple.component.scss']
})
export class CityChoiseListSimpleComponent implements OnInit {

  @Output() cityOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chooseCity(choosenCity: string): void {
    this.cityOutput.emit(choosenCity);
  }
}
