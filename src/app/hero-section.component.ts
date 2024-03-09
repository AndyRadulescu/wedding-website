import {Component} from '@angular/core';
import {TranslocoDirective, TranslocoPipe} from "@ngneat/transloco";
import {LanguageSelectorComponent} from "./components/language-selector.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    TranslocoDirective,
    LanguageSelectorComponent,
    TranslocoPipe
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
