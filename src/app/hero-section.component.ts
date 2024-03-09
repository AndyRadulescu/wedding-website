import {Component} from '@angular/core';
import {TranslocoDirective} from "@ngneat/transloco";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    TranslocoDirective
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
