import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TzAfricaComponent } from './tz-africa/tz-africa.component';
import { TzAsiaComponent } from './tz-asia/tz-asia.component';
import { TzAustraliaComponent } from './tz-australia/tz-australia.component';
import { TzCanadaComponent } from './tz-america/tz-canada/tz-canada.component';
import { TzChinaComponent } from './tz-china/tz-china.component';
import { TzEuropeComponent } from './tz-europe/tz-europe.component';
import { TzIndiaComponent } from './tz-india/tz-india.component';
import { TzIowComponent } from './tz-india/tz-iow/tz-iow.component';
import { TzKeralaComponent } from './tz-india/tz-kerala/tz-kerala.component';
import { TzMaharashtraComponent } from './tz-india/tz-maharashtra/tz-maharashtra.component';
import { TzIslandnationsComponent } from './tz-islandnations/tz-islandnations.component';
import { TzMiddleeastComponent } from './tz-middleeast/tz-middleeast.component';
import { TzOdishaComponent } from './tz-india/tz-odisha/tz-odisha.component';
import { TzPakistanComponent } from './tz-centralasia/tz-pakistan/tz-pakistan.component';
import { TzRussiaComponent } from './tz-russia/tz-russia.component';
import { TzSouthamericaComponent } from './tz-america/tz-southamerica/tz-southamerica.component';
import { TzUSAComponent } from './tz-usa/tz-usa.component';
import { TzWestasiaComponent } from './tz-westasia/tz-westasia.component';
import { TzWestbengalComponent } from './tz-india/tz-westbengal/tz-westbengal.component';
import { TzAmericaComponent } from './tz-america/tz-america.component';
import { TzTamilnaduComponent } from './tz-india/tz-tamilnadu/tz-tamilnadu.component';
import { TzAndhraComponent } from './tz-india/tz-andhra/tz-andhra.component';
import { TzSikkimComponent } from './tz-india/tz-sikkim/tz-sikkim.component';
import { TzAyodhyaComponent } from './tz-india/tz-ayodhya/tz-ayodhya.component';
import { AppComponent } from './app.component';
import { NotFoundError } from 'rxjs';
import { TzIndependentwaterComponent } from './tz-independentwater/tz-independentwater.component';
import { TzCentralasiaComponent } from './tz-centralasia/tz-centralasia.component';

const routes: Routes = [
  /*{
    path: "/debug",
    component: AppComponent,
  },*/
  {
  
      path: 'not-found',
      component: NotFoundError,
    
  },
  { path: 'tz-usa-routing', component: TzUSAComponent },
  { path: 'tz-africa-routing', component: TzAfricaComponent },
  { path: 'tz-islandnations-routing', component: TzIslandnationsComponent },
  { path: 'tz-independentwater-routing', component: TzIndependentwaterComponent },

  { path: 'tz-middleeast-routing', component: TzMiddleeastComponent },
  { path: 'tz-india-routing', component: TzIndiaComponent },

  { path: 'tz-southamerica-routing', component: TzSouthamericaComponent },
  { path: 'tz-america-routing', component: TzAmericaComponent },
  { path: 'tz-pakistan-routing', component: TzPakistanComponent },
  { path: 'tz-china-routing', component: TzChinaComponent },
  { path: 'tz-asia-routing', component: TzAsiaComponent },
  { path: 'tz-pakistan-routing', component: TzPakistanComponent },
  { path: 'tz-centralasia-routing', component: TzCentralasiaComponent },

  { path: 'tz-canada-routing', component: TzCanadaComponent },
  { path: 'tz-australia-routing', component: TzAustraliaComponent },
  { path: 'tz-europe-routing', component: TzEuropeComponent },

  { path: 'tz-westasia-routing', component: TzWestasiaComponent },
  { path: 'tz-russia-routing', component: TzRussiaComponent },

  { path: 'tz-kerala-routing', component: TzKeralaComponent },
  //{ path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: 'tz-iow-routing', component:TzIowComponent},// redirectTo: 'app', pathMatch: 'full'},
  { path: 'tz-maharashtra-routing', component:TzMaharashtraComponent},
  { path: 'tz-westbengal-routing', component:TzWestbengalComponent},
  { path: 'tz-kalinga-routing', component:TzOdishaComponent},
  { path: 'tz-tamil-routing', component:TzTamilnaduComponent},
  { path: 'tz-andhra-routing', component:TzAndhraComponent},
  { path: 'tz-sikkim-routing', component:TzSikkimComponent},
  { path: 'tz-ayodhya-routing', component:TzAyodhyaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  //{ path: 'second-component', component: SecondComponent },
}
