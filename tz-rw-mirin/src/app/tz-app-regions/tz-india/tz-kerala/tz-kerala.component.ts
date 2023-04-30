import { Component } from '@angular/core';
import {} from './../tz-iow/tz-iow.component';

@Component({
  selector: 'app-tz-kerala',
  templateUrl: './tz-kerala.component.html',
  styleUrls: ['./tz-kerala.component.css']
})
export class TzKeralaComponent {
  title = 'app-tz-kerala';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
