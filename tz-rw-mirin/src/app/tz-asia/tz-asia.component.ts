import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-asia',
  templateUrl: './tz-asia.component.html',
  styleUrls: ['./tz-asia.component.css']
})
export class TzAsiaComponent {
  title = 'app-tz-asia';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
