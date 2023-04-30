import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-islandnations',
  templateUrl: './tz-islandnations.component.html',
  styleUrls: ['./tz-islandnations.component.css']
})
export class TzIslandnationsComponent {
  title = 'app-tz-islandnations';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }
}
