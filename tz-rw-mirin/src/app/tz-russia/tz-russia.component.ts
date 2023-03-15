import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-russia',
  templateUrl: './tz-russia.component.html',
  styleUrls: ['./tz-russia.component.css']
})
export class TzRussiaComponent {
  title = 'tz-rw-russia';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
