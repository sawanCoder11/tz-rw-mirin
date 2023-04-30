import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticAppserviceService {

  cc_date: any;
  currentDate:any;
  public today = Date.now();
  
  constructor() { 
    this.currentDate = new Date();
  }

   public calculateDiff() {

    //let 

    //console.log(currentDate);
   // this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    console.log('target :' + this.cc_date);


    //let todayDate = new Date();
       // let sentOnDate = new Date(sentOn);
     /*  this.cc_date.setDate(this.cc_date.getDate());
        let differenceInTime = this.cc_date.getTime()-currentDate.getTime();
        // To calculate the no. of days between two dates
        let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
        return differenceInDays;*/
    console.log( 'TT'+Date.UTC(
      this.cc_date.getFullYear(), this.cc_date.getMonth(), this.cc_date.getDate()
    ));
    console.log('To'+Date.UTC(
      this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()
    ));

    //T1701216000000 static-appservice.service.ts:32:12
    /*
    TT1701216000000 static-appservice.service.ts:32:12
    To1681516800000
    */
    //To1681516800000

    //Wrong Formula
    return Math.floor(
      (
         
        Date.UTC(
          this.cc_date.getFullYear(), this.cc_date.getMonth(), this.cc_date.getDate()
        )
        -
        Date.UTC(
          this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()
        )
      ) /86400000 );// (1000 * 60 * 60 * 24)); //86400000
      

   
  }



}
