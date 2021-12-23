import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataCovidFranceService } from '../services/global-data-covid-france.service';
import { DonneesCovid } from '../model/donnees-covid';
import * as Highcharts from 'highcharts';
import { DATA_NOT_PROVID } from '../utils/utils';

@Component({
  selector: 'app-deces-covid',
  templateUrl: './deces-covid.component.html',
  styleUrls: ['./deces-covid.component.css'],
})
export class DecesCovidComponent implements OnInit {
  @Input() death: DonneesCovid[] = [];
  noData = DATA_NOT_PROVID;

  date = '2021-12-22';

  number_death_covid_data: number[] = [];
  deathPerDay: number[] = [];

  public options: any = {
    Chart: {
      type: 'area',
      height: 400,
      width: 200,
    },
    title: {
      text: 'Evolution des dèces du covid-19',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: [],
      tickmarkPlacement: 'on',
      title: {
        enabled: false,
      },
    },
    series: [
      {
        name: 'Décès',
        data: [],
      },
    ],
  };

  constructor(private globalData: GlobalDataCovidFranceService) {}

  ngOnInit(): void {
    this.globalData.getInfosCovidDataFrance().subscribe((data) => {
      const date_data: string[] = [];
      data
        .filter((d) => Date.parse(d.date) <= Date.parse(this.date))
        .forEach((row) => {
          date_data.push(row.date);
          this.number_death_covid_data.push(row.deces);
        });

      this.options.series[0]['data'] = this.number_death_covid_data.map(
        (d, e, t) => d - t[e - 1]
      );
      this.deathPerDay = this.number_death_covid_data.map(
        (d, e, t) => d - t[e - 1]
      );
      this.options.xAxis.categories = date_data;
      Highcharts.chart('containerDeath', this.options);
    });
  }
}
