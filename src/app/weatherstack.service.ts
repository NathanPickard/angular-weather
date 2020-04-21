import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherstackService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    // return this.http.get()
  }
}
