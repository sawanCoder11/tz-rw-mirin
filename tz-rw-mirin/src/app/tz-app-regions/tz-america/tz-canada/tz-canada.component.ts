import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-canada',
  templateUrl: './tz-canada.component.html',
  styleUrls: ['./tz-canada.component.css']
})
export class TzCanadaComponent {
  title = 'app-tz-canada';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
