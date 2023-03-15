import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-southamerica',
  templateUrl: './tz-southamerica.component.html',
  styleUrls: ['./tz-southamerica.component.css']
})
export class TzSouthamericaComponent {
  //title = 'tz-rw-america';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
