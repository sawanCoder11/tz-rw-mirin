import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-westasia',
  templateUrl: './tz-westasia.component.html',
  styleUrls: ['./tz-westasia.component.css']
})
export class TzWestasiaComponent {
  title = 'tz-rw-westasia';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
