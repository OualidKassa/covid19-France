import { Component, Input, OnInit } from '@angular/core';
import { DonneesCovid } from '../model/donnees-covid';
import { DATA_NOT_PROVID } from '../utils/utils';
import * as Highcharts from 'highcharts';
import { GlobalDataCovidFranceService } from '../services/global-data-covid-france.service';

@Component({
  selector: 'app-guerison',
  templateUrl: './guerison.component.html',
  styleUrls: ['./guerison.component.css'],
})
export class GuerisonComponent implements OnInit {
  @Input() gueris: DonneesCovid[] = [];
  noData = DATA_NOT_PROVID;
  date = '2021-12-22';

  public options: any = {
    Chart: {
      type: 'area',
      height: 400,
      width: 200,
    },
    title: {
      text: 'Evolution des guérisons du covid-19',
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
        name: 'Guérisons',
        data: [],
      },
    ],
  };

  constructor(private globalData: GlobalDataCovidFranceService) {}
  ngOnInit(): void {
    this.globalData.getInfosCovidDataFrance().subscribe((data) => {
      const date_data: string[] = [];
      const number_cure_covid_data: number[] = [];
      data
        .filter((d) => Date.parse(d.date) <= Date.parse(this.date))
        .forEach((row) => {
          date_data.push(row.date);
          number_cure_covid_data.push(row.gueris);
        });

      this.options.series[0]['data'] = number_cure_covid_data.map(
        (cure, idx, tabCure) => cure - tabCure[idx - 1]
      );
      this.options.xAxis.categories = date_data;
      Highcharts.chart('container', this.options);
    });
  }
}
