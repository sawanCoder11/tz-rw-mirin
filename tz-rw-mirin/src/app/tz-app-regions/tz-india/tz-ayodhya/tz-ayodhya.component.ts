import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-ayodhya',
  templateUrl: './tz-ayodhya.component.html',
  styleUrls: ['./tz-ayodhya.component.css']
})
export class TzAyodhyaComponent {
  title = 'app-tz-ayodhya';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
