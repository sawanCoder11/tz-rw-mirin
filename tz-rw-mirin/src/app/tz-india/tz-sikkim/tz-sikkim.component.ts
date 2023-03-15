import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-sikkim',
  templateUrl: './tz-sikkim.component.html',
  styleUrls: ['./tz-sikkim.component.css']
})
export class TzSikkimComponent {
  title = 'app-tz-sikkim';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
