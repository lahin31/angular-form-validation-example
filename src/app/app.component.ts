import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public desCount = 150;
  onSubmit(value) {
    console.log(value);
  }
  onKey(event: any) {
    if (event.keyCode === 8) {
      if (this.desCount >= 150) {
        return false;
      }
      this.desCount = this.desCount + 1;
    } 
    else if(event.keyCode === 16 || event.keyCode === 17 || event.keyCode === 18 || event.keyCode === 20 || event.keyCode === 33 || event.keyCode === 34 || event.keyCode === 35 || event.keyCode === 36 || event.keyCode === 45 || event.keyCode === 46) {
      return false;
    }
    else if(event.keyCode === 9 || event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
      this.desCount = this.desCount;
    }
    else if(this.desCount <= 0) {
      return false;
    }
    else {
      this.desCount = this.desCount - 1;
    }
  } 
}
