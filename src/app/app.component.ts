import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroSectionComponent} from "./hero-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Andy&Diana';
}
