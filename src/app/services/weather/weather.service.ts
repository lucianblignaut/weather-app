import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { WeatherResponse } from '../../models/Weather';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _http = inject(HttpClient);

  // Signal-based state
  private _selectedCity = signal<string | null>(null);
  private _loadingWeather = signal(false);
  private _error = signal<string | null>(null);
  private _weather = signal<WeatherResponse | null>(null);

  // State Selectors
  readonly loadingWeather = computed(() => this._loadingWeather());
  readonly weather = computed(() => this._weather());
  readonly error = computed(() => this._error());

  constructor() {}

  /**
   * Sets city name
   * @param cityName
   */
  public selectCity(cityName: string): void {
    this._selectedCity.set(cityName);
  }

  /**
   * Queries API for the selected city's weather data
   * @param city
   * @param testBadNetwork
   * @returns void
   */
  public search(city: string, testBadNetwork: boolean): void {
    if (city.length === 0) return;

    this._loadingWeather.set(true);
    this._error.set(null);

    //for demo purposes to showcase error handling
    const url = testBadNetwork
      ? 'https://some-url-that-definitely-wont-work'
      : 'https://rainbow-ganache-4a75e9.netlify.app/api/weather';

    this._http
      .get<WeatherResponse>(url, { params: { city } })
      .pipe(
        catchError((err) => {
          this._error.set(err.error?.error || 'Please try again later');
          this._weather.set(null);
          this._loadingWeather.set(false);
          return of(null);
        })
      )
      .subscribe((data) => {
        if (data) this._weather.set(data);
        this._loadingWeather.set(false);
      });
  }
}
