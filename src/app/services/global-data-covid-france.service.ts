import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DonneesCovid} from "../model/donnees-covid";
import {filter, map, reduce} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GlobalDataCovidFranceService {

  constructor(private httpclient: HttpClient) { }



  urlDataGouv = 'https://www.data.gouv.fr/en/datasets/r/d2671c6c-c0eb-4e12-b69a-8e8f87fc224c';


  getInfosCovidDataFrance(){
    return this.httpclient.get<DonneesCovid[]>(this.urlDataGouv)
  }
}
