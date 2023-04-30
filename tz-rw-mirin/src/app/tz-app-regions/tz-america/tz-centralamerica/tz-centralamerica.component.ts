import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-centralamerica',
  templateUrl: './tz-centralamerica.component.html',
  styleUrls: ['./tz-centralamerica.component.css']
})
export class TzCentralamericaComponent {
  title = 'app-tz-centralamerica';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
