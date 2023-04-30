import { Component } from '@angular/core';

@Component({
  selector: 'app-tz-america',
  templateUrl: './tz-america.component.html',
  styleUrls: ['./tz-america.component.css']
})
export class TzAmericaComponent {
  //private loadComponent = false;

  public showCaribbean: boolean = false;
  public showMexico: boolean = false;
  public showSouthAmerica: boolean = false;
  public showCentralAmerica: boolean = false;
  public showLatinAmerica: boolean = false;
  public showcanada: boolean = false;

  buttonTitle: string = "Hide";
  visible: boolean = true;
  showhideUtility() {
    this.visible = this.visible ? false : true;
    this.buttonTitle = this.visible ? "Hide" : "Show";
  }

  ShowRegion(value: any) {
    //alert(value);

    switch (value) {
      case 1:
        this.fn_hideall();
       // this.showCaribbean,this.showSouthAmerica ,this.showCentralAmerica,this.showLatinAmerica,this.showMexico = false;
        this.showcanada = true;
        
        break;
      case 2:
        this.fn_hideall();
        //this.showcanada,this.showSouthAmerica ,this.showCentralAmerica,this.showLatinAmerica,this.showMexico = false; 
      this.showCaribbean = true;
       
        break;
      case 3:
        this.fn_hideall();
        //this.showcanada,this.showCaribbean ,this.showCentralAmerica,this.showLatinAmerica,this.showMexico = false;  
      this.showSouthAmerica = true;
        
        break;
      case 4:
        this.fn_hideall();
        //this.showcanada,this.showCaribbean,this.showSouthAmerica ,this.showLatinAmerica,this.showMexico = false;  
      this.showCentralAmerica = true;
        
        break;
      case 5:
        this.fn_hideall();
      //this.showcanada,this.showCaribbean,this.showSouthAmerica ,this.showCentralAmerica,this.showMexico = false;  
      this.showLatinAmerica = true;
        
        break;
      case 6:
        this.fn_hideall();
        this.showMexico = true;
        
        break;

      default:
        break;


    }

  }

  fn_hideall()
{
  this.showMexico=false;
  this.showcanada=false;
  this.showCaribbean=false;
  this.showSouthAmerica=false;
  this.showCentralAmerica=false;
  this.showLatinAmerica = false;  
}  
}
