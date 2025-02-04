import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-choise-result',
  templateUrl: './city-choise-result.component.html',
  styleUrls: ['./city-choise-result.component.scss']
})
export class CityChoiseResultComponent implements OnInit {

  @Input() resultInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
