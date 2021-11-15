import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import {HttpClientModule} from "@angular/common/http";
import { DecesCovidComponent } from './deces-covid/deces-covid.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    DecesCovidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
