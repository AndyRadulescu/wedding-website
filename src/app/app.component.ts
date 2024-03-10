import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroSectionComponent} from "./sections/hero-section.component";
import {CardInvitationComponent} from "./sections/card-invitation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, CardInvitationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Andy&Diana';
}
