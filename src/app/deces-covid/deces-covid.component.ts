import { Component, OnInit } from '@angular/core';
import {GlobalDataCovidFranceService} from "../services/global-data-covid-france.service";
import {DonneesCovid} from "../model/donnees-covid";
import {pipe} from "rxjs";

@Component({
  selector: 'app-deces-covid',
  templateUrl: './deces-covid.component.html',
  styleUrls: ['./deces-covid.component.css']
})
export class DecesCovidComponent implements OnInit {

  death: DonneesCovid[] =  [];
  date = '2021-03-01'

  constructor(private deathData: GlobalDataCovidFranceService) { }



  ngOnInit(): void {

   this.deathData.getNumberOfDeathFranceByDate().subscribe(data => {return this.death = data.filter(d => Date.parse(d.date) >= Date.parse(this.date))});

    console.log('date retireve: '+ this.death.length);
  }

}
