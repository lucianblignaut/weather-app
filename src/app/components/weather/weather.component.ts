import { Component, inject, signal } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  private _weatherService = inject(WeatherService);

  query = '';
  badNetwork = false;

  loadingWeather = this._weatherService.loadingWeather;
  weather = this._weatherService.weather;
  error = this._weatherService.error;

  search() {
    this._weatherService.search(this.query, this.badNetwork);
  }

  formatNumber(num: number) {
    return Math.ceil(num);
  }
}
