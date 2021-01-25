import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewApp';
  unitName = 'Database';
  i=0;
  j=0;
  increment(){
    this.i = this.i+1;
    console.log("We have got a click");
  }


  addition(){

  return this.j+ this.i;
  }
  
}

