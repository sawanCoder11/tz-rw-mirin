import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-middleeast',
  templateUrl: './tz-middleeast.component.html',
  styleUrls: ['./tz-middleeast.component.css']
})
export class TzMiddleeastComponent {
  title = 'tz-rw-middleeast';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
