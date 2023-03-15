import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-europe',
  templateUrl: './tz-europe.component.html',
  styleUrls: ['./tz-europe.component.css']
})
export class TzEuropeComponent {
  title = 'app-tz-europe';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
