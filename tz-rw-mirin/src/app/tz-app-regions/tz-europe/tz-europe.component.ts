import { Component } from '@angular/core';
//import StaticAppserviceService from '../static-appservice.service';


//import { StaticAppserviceService } from '../services/static-appservice.service';

//import from ../

@Component({
  selector: 'app-tz-europe',
  templateUrl: './tz-europe.component.html',
  styleUrls: ['./tz-europe.component.css']
})
export class TzEuropeComponent {
  title = 'app-tz-europe';
  date:any;
  public today = Date.now();
  value=0;
  
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }

  /*
  Call_StaticService(value:any){
  
    //this.calculate_ClockChange_date(value);
    //var diff_date_value=this.obj_StaticAppserviceService.calculateDiff();
    //return diff_date_value;
    //return 0;
  }

  calculate_ClockChange_date(newvalue:any){
    

    switch(newvalue){
      case 1||2||3||4||5||6:{
        this.obj_StaticAppserviceService.cc_date=new Date(2023,10,29); // --Rome
        break;
      }  

        
      default:
        break;
    }
  }*/

}
