import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-tamilnadu',
  templateUrl: './tz-tamilnadu.component.html',
  styleUrls: ['./tz-tamilnadu.component.css']
})
export class TzTamilnaduComponent {

  title = 'app-tz-tamilnadu';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
