import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-australia',
  templateUrl: './tz-australia.component.html',
  styleUrls: ['./tz-australia.component.css']
})
export class TzAustraliaComponent {
  title = 'app-tz-austtralia';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
