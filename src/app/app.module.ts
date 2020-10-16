import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {FlightCostComponent} from './FlightCost/FlightCost.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightCostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FlightCostComponent]
})
export class AppModule { }
