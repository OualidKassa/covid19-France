import {Component, OnInit} from '@angular/core';
import {GlobalDataCovidFranceService} from "./services/global-data-covid-france.service";
import {DonneesCovid} from "./model/donnees-covid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-webnet-angular';

  dataCovid: DonneesCovid[] = [{
    casConfirmes: 0,
  deces: 0,
  decesEhpad: 0,
  reanimation: 0,
  hospitalises: 0,
  gueris: 0,
  date: '',
  nouvellesHospitalisations: 0,
  nouvellesReanimations: 0,
  nouvellesPremieresInjections: 0,
  cumulPremieresInjections: 0,
  stockNombreTotalDoses: 0,
  stockNombreDosesPfizer: 0,
  stockNombreDosesModerna: 0,
  livraisonsCumulNombreTotalDoses: 0,
  livraisonsCumulNombreDosesPfizer: 0,
  livraisonsCumulNombreDosesModerna: 0,
  totalPrisesRendezVousSemaine: 0,
  prisesRendezVousSemaineRang1: 0,
  prisesRendezVousSemaineRang2: 0,
  stockEhpadNombreDosesPfizer: 0
  }];
  dataNotProvided = 'donnée non fourni';


  constructor(private globalData: GlobalDataCovidFranceService) {
  }

  ngOnInit(): void {
    this.globalData.getInfoGlobalFrance().subscribe((data: DonneesCovid[]) => {
     this.dataCovid = [...data];
   });
  }
}
