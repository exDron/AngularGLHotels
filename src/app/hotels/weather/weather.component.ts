import { Component, OnInit, Input } from '@angular/core';
import Weather from '../models/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() hotelWeather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
