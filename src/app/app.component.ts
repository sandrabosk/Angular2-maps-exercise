import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular Maps Exercise";
  lat: number = 43.343033;
  lng: number = 17.807894;
}
