import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs'; 
//import {static-appservice} from '../app/static-appservice.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TzUSAComponent } from './tz-app-regions/tz-usa/tz-usa.component';
import { TzAfricaComponent } from './tz-app-regions/tz-africa/tz-africa.component';
import { TzIndiaComponent } from './tz-app-regions/tz-india/tz-india.component';
import { TzMiddleeastComponent } from './tz-app-regions/tz-middleeast/tz-middleeast.component';
import { TzIslandnationsComponent } from './tz-app-regions/tz-islandnations/tz-islandnations.component';
import { TzSouthamericaComponent } from './tz-app-regions/tz-america/tz-southamerica/tz-southamerica.component';
import { TzAsiaComponent } from './tz-app-regions/tz-asia/tz-asia.component';
import { TzChinaComponent } from './tz-app-regions/tz-china/tz-china.component';
import { TzPakistanComponent } from './tz-app-regions/tz-centralasia/tz-pakistan/tz-pakistan.component';
import { TzEuropeComponent } from './tz-app-regions/tz-europe/tz-europe.component';
import { TzCanadaComponent } from './tz-app-regions/tz-america/tz-canada/tz-canada.component';
import { TzAustraliaComponent } from './tz-app-regions/tz-australia/tz-australia.component';
import { TzKeralaComponent } from './tz-app-regions/tz-india/tz-kerala/tz-kerala.component';
import { TzIowComponent } from './tz-app-regions/tz-india/tz-iow/tz-iow.component';
import { TzRouteComponent } from './tz-app-regions/tz-india/tz-route/tz-route.component';
import { TzMaharashtraComponent } from './tz-app-regions/tz-india/tz-maharashtra/tz-maharashtra.component';
import { TzWestasiaComponent } from './tz-app-regions/tz-westasia/tz-westasia.component';
import { TzRussiaComponent } from './tz-app-regions/tz-russia/tz-russia.component';
import { TzWestbengalComponent } from './tz-app-regions/tz-india/tz-westbengal/tz-westbengal.component';
import { TzOdishaComponent } from './tz-app-regions/tz-india/tz-odisha/tz-odisha.component';
import { TzTamilnaduComponent } from './tz-app-regions/tz-india/tz-tamilnadu/tz-tamilnadu.component';
import { TzAmericaComponent } from './tz-app-regions/tz-america/tz-america.component';
import { TzMexicoComponent } from './tz-app-regions/tz-america/tz-mexico/tz-mexico.component';
import { TzAndhraComponent } from './tz-app-regions/tz-india/tz-andhra/tz-andhra.component';
import { TzSikkimComponent } from './tz-app-regions/tz-india/tz-sikkim/tz-sikkim.component';
import { TzAyodhyaComponent } from './tz-app-regions/tz-india/tz-ayodhya/tz-ayodhya.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TzIndependentwaterComponent } from './tz-app-regions/tz-independentwater/tz-independentwater.component';
import { TzCentralamericaComponent } from './tz-app-regions/tz-america/tz-centralamerica/tz-centralamerica.component';
import { TzCentralasiaComponent } from './tz-app-regions/tz-centralasia/tz-centralasia.component';
import { TzNativesComponent } from './tz-app-regions/tz-america/tz-natives/tz-natives.component';
import { TzCaribbeanComponent } from './tz-app-regions/tz-america/tz-caribbean/tz-caribbean.component';
import { TzFrenchComponent } from './tz-app-regions/tz-french/tz-french.component';

import { StaticAppserviceService } from './services/static-appservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TzUSAComponent,
    TzAfricaComponent,
    TzIndiaComponent,
    TzMiddleeastComponent,
    TzIslandnationsComponent,
    TzSouthamericaComponent,
    TzAsiaComponent,
    TzChinaComponent,
    TzPakistanComponent,
    TzEuropeComponent,
    TzCanadaComponent,
    TzAustraliaComponent,
    TzKeralaComponent,
    TzIowComponent,
    TzRouteComponent,
    TzMaharashtraComponent,
    TzWestasiaComponent,
    TzRussiaComponent,
    TzWestbengalComponent,
    TzOdishaComponent,
    TzTamilnaduComponent,
    TzAmericaComponent,
    TzMexicoComponent,
    TzAndhraComponent,
    TzSikkimComponent,
    TzAyodhyaComponent,
    TzIndependentwaterComponent,
    TzCentralamericaComponent,
    TzCentralasiaComponent,
    TzNativesComponent,
    TzCaribbeanComponent,
    TzFrenchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [StaticAppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
