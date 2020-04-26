import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherstackService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get('http://api.weatherstack.com/current?access_key=3a4569f9956ea7bd05433eabcc5881dd&query=' + location);
  }
}
