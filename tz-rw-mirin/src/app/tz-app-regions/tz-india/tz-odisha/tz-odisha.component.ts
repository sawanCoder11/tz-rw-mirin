import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-kalinga',
  templateUrl: './tz-odisha.component.html',
  styleUrls: ['./tz-odisha.component.css']
})
export class TzOdishaComponent {
  title = 'app-tz-kalinga';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
