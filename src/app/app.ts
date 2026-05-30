import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Signup],
  templateUrl: './app.html',
  //  template: `<h1>template from app.component {{name}}</h1>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Anguler-21');
  name = "Anirban"
  age = 20
  age1 = 22
  email = "anirban@example.com"
  getTotalAge(a: number, b: number) {
    return a + b;
  }
  callmr(){
    alert("Hello, Mr. Anirban!");
  }

  count = 0;
  counter(isplus: boolean) {
    if (isplus) {
      this.count++;
      this.pluse();
    }
    else {
      this.count > 0 &&  this.count--;
      this.minus();
    }

    
  }

  pluse() {
    console.log("pluse function called");
  }
  minus() {
    console.log("minus function called");
  }

handleevent(event: string) {
  console.log(event);
}





}
