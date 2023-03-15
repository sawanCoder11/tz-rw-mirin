import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-india',
  templateUrl: './tz-india.component.html',
  styleUrls: ['./tz-india.component.css']
})
export class TzIndiaComponent {
  title = 'app-tz-india';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
