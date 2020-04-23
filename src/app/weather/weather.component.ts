import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { WeatherstackService } from './../weatherstack.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private weatherstackService: WeatherstackService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToWeatherStack(formValues) {
    console.log(formValues);
    this.weatherstackService.getWeather(formValues.location)
      .subscribe(data => console.log(data));
  }

}
