import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-andhra',
  templateUrl: './tz-andhra.component.html',
  styleUrls: ['./tz-andhra.component.css']
})
export class TzAndhraComponent {
  title = 'app-tz-andhra';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }

}
