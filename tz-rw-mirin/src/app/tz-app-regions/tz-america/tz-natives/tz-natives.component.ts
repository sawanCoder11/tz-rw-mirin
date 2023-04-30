import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-natives',
  templateUrl: './tz-natives.component.html',
  styleUrls: ['./tz-natives.component.css']
})
export class TzNativesComponent {

  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
