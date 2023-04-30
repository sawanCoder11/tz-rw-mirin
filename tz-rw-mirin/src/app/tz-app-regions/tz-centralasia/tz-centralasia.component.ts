import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-centralasia',
  templateUrl: './tz-centralasia.component.html',
  styleUrls: ['./tz-centralasia.component.css']
})
export class TzCentralasiaComponent {
  title = 'app-tz-centralasia';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
