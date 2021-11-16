import {Component, Input, OnInit} from '@angular/core';
import {GlobalDataCovidFranceService} from "../services/global-data-covid-france.service";
import {DonneesCovid} from "../model/donnees-covid";
import * as Highcharts from 'highcharts';
import {DATA_NOT_PROVID} from "../utils/utils";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-deces-covid',
  templateUrl: './deces-covid.component.html',
  styleUrls: ['./deces-covid.component.css']
})
export class DecesCovidComponent implements OnInit {

  @Input() death: DonneesCovid[] = [];
  noData = DATA_NOT_PROVID;

  date=  '2020-08-16';

  public options: any = {
    Chart: {
      type: 'area',
      height: 500
    },
    title: {
      text: 'Evolution des dèces du covid-19'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    series: [
      {
      name: 'Décès',
      data: []
    }
    ]
  }


  constructor(private globalData: GlobalDataCovidFranceService) {
  }


  ngOnInit(): void {

    this.globalData.getInfosCovidDataFrance().subscribe(data => {
      const date_data: string[] = [];
      const number_death_covid_data: number[] = [];
      data.filter(d => Date.parse(d.date) <= Date.parse(this.date))
      .forEach(row => {
       date_data.push(row.date);
       number_death_covid_data.push(row.deces)
      });

      this.options.series[0]['data'] = number_death_covid_data;
      this.options.xAxis.categories = date_data;
      Highcharts.chart('containerDeath', this.options);
    });

  }
}
