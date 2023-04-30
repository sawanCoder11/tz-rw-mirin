import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-iow',
  templateUrl: './tz-iow.component.html',
  styleUrls: ['./tz-iow.component.css']
})
export class TzIowComponent {
  title = 'app-tz-iow';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
