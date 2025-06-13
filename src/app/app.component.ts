import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';

@Component({
  selector: 'app-root',
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'weather-app';
}
