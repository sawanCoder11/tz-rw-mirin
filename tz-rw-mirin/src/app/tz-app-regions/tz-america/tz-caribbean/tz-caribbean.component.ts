import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-caribbean',
  templateUrl: './tz-caribbean.component.html',
  styleUrls: ['./tz-caribbean.component.css']
})
export class TzCaribbeanComponent {
  title = 'app-tz-caribbean';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
