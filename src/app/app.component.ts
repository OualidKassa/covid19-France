import {Component, OnInit} from '@angular/core';
import {GlobalDataCovidFranceService} from "./services/global-data-covid-france.service";
import {DateAdapter} from "@angular/material/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-webnet-angular';

  dataCovidGlobal: any;
  date = '2020-03-10'


  constructor(private globalData: GlobalDataCovidFranceService) {
  }

  ngOnInit(): void {
    this.globalData.getInfosCovidDataFrance().subscribe(
      data => this.dataCovidGlobal = data.filter(
        d => Date.parse(d.date) <= Date.parse(this.date)));
  }
}
