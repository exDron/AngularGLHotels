import { Component, Input } from '@angular/core';
import { IWeather } from '../models/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input() public hotelWeather: IWeather;
}
