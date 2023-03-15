import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-usa',
  templateUrl: './tz-usa.component.html',
  styleUrls: ['./tz-usa.component.css']
})
export class TzUSAComponent {
  title = 'app-tz-usa';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
