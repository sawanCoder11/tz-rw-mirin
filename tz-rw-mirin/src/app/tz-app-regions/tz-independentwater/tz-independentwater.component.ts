import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-independentwater',
  templateUrl: './tz-independentwater.component.html',
  styleUrls: ['./tz-independentwater.component.css']
})
export class TzIndependentwaterComponent {
  title = 'app-tz-independentwater';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
