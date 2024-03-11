import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeroSectionComponent} from "./sections/hero-section.component";
import {CardInvitationComponent} from "./sections/card-invitation.component";
import {FooterComponent} from "./sections/footer.component";
import {PhotoSectionComponent} from "./sections/photo-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, CardInvitationComponent, FooterComponent, PhotoSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Andy&Diana';
}
