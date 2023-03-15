import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TzUSAComponent } from './tz-usa/tz-usa.component';
import { TzAfricaComponent } from './tz-africa/tz-africa.component';
import { TzIndiaComponent } from './tz-india/tz-india.component';
import { TzMiddleeastComponent } from './tz-middleeast/tz-middleeast.component';
import { TzIslandnationsComponent } from './tz-islandnations/tz-islandnations.component';
import { TzSouthamericaComponent } from './tz-america/tz-southamerica/tz-southamerica.component';
import { TzAsiaComponent } from './tz-asia/tz-asia.component';
import { TzChinaComponent } from './tz-china/tz-china.component';
import { TzPakistanComponent } from './tz-centralasia/tz-pakistan/tz-pakistan.component';
import { TzEuropeComponent } from './tz-europe/tz-europe.component';
import { TzCanadaComponent } from './tz-america/tz-canada/tz-canada.component';
import { TzAustraliaComponent } from './tz-australia/tz-australia.component';
import { TzKeralaComponent } from './tz-india/tz-kerala/tz-kerala.component';
import { TzIowComponent } from './tz-india/tz-iow/tz-iow.component';
import { TzRouteComponent } from './tz-india/tz-route/tz-route.component';
import { TzMaharashtraComponent } from './tz-india/tz-maharashtra/tz-maharashtra.component';
import { TzWestasiaComponent } from './tz-westasia/tz-westasia.component';
import { TzRussiaComponent } from './tz-russia/tz-russia.component';
import { TzWestbengalComponent } from './tz-india/tz-westbengal/tz-westbengal.component';
import { TzOdishaComponent } from './tz-india/tz-odisha/tz-odisha.component';
import { TzTamilnaduComponent } from './tz-india/tz-tamilnadu/tz-tamilnadu.component';
import { TzAmericaComponent } from './tz-america/tz-america.component';
import { TzMexicoComponent } from './tz-america/tz-mexico/tz-mexico.component';
import { TzAndhraComponent } from './tz-india/tz-andhra/tz-andhra.component';
import { TzSikkimComponent } from './tz-india/tz-sikkim/tz-sikkim.component';
import { TzAyodhyaComponent } from './tz-india/tz-ayodhya/tz-ayodhya.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TzIndependentwaterComponent } from './tz-independentwater/tz-independentwater.component';
import { TzCentralamericaComponent } from './tz-america/tz-centralamerica/tz-centralamerica.component';
import { TzCentralasiaComponent } from './tz-centralasia/tz-centralasia.component';

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
    TzCentralasiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
