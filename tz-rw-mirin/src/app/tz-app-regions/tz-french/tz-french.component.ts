import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-french',
  templateUrl: './tz-french.component.html',
  styleUrls: ['./tz-french.component.css']
})
export class TzFrenchComponent {
  title = 'app-tz-france';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
