import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = {
    title: 'Angular In Practice',
  };

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyup(newTitle: string) {
    this.data.title = newTitle;
  }
}
