import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tz-rw-mirin';
  date:any;
  public today = Date.now();
  constructor(){
    setInterval(()=>{
      this.date=new Date();
      this.today=Date.now();
    },1000);
  }

  public fn_reload(){
    window.location.reload();
  }

}


  /*date:any;
  public today = Date.now();
  
  /*constructor(){
    setInterval(() => {
      this.date = new Date();
      this.today = Date.now();
    }, 1000)};

}
*/