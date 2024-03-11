import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  constructor(private translocoService: TranslocoService) {
  }

  public EN = 'en';
  public RO = 'ro';
  public locale = this.RO;

  public setLocale(locale: string) {
    this.locale = locale;
    this.translocoService.setActiveLang(locale);
  }
}
