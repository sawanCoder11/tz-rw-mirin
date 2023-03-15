import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-africa',
  templateUrl: './tz-africa.component.html',
  styleUrls: ['./tz-africa.component.css']
})
export class TzAfricaComponent {
  title = 'app-tz-africa';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
