import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-maharashtra',
  templateUrl: './tz-maharashtra.component.html',
  styleUrls: ['./tz-maharashtra.component.css']
})
export class TzMaharashtraComponent {
  title = 'app-tz-maharashtra';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
