import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-pakistan',
  templateUrl: './tz-pakistan.component.html',
  styleUrls: ['./tz-pakistan.component.css']
})
export class TzPakistanComponent {
  title = 'app-tz-pakistan';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
