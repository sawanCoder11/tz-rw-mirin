import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-westbengal',
  templateUrl: './tz-westbengal.component.html',
  styleUrls: ['./tz-westbengal.component.css']
})
export class TzWestbengalComponent {
  title = 'app-tz-westbengal';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
