import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tutorial-liviu-angular-gangster';
  rapper = 'DJ Khaled';
  rapperEmail = 'dj.khaled@gmail.com';

  sayHello(name: string) {
    alert('Hello ' + name + '!');
  }
}
