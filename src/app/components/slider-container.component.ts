import { Component } from '@angular/core';
import {AdditionalItemComponent} from './additional-item.component';
import {TranslocoDirective} from '@ngneat/transloco';

@Component({
  selector: 'app-slider-container',
  standalone: true,
  imports: [
    AdditionalItemComponent,
    TranslocoDirective
  ],
  templateUrl: './slider-container.component.html',
  styleUrl: './slider-container.component.scss'
})
export class SliderContainerComponent {

}
