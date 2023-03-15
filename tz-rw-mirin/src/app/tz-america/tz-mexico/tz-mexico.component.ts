import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-mexico',
  templateUrl: './tz-mexico.component.html',
  styleUrls: ['./tz-mexico.component.css']
})
export class TzMexicoComponent {
  title = 'app-tz-mexico';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
