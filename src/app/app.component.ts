import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  { 
  private header:String = "Header";
  private counter:number = 1;

  private toggle:Boolean = true;

  private countUp(){
    this.counter+=1;
  }
  private countDown(){
    this.counter-=1;
  }


  private trigger() {
    this.toggle = !this.toggle;
  }
  
}
