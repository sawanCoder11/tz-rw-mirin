import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-china',
  templateUrl: './tz-china.component.html',
  styleUrls: ['./tz-china.component.css']
})
export class TzChinaComponent {
  title = 'app-tz-china';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
