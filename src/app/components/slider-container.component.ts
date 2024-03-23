import {Component} from '@angular/core';
import {AdditionalItemComponent} from './additional-item.component';
import {TranslocoDirective} from '@ngneat/transloco';
import {CarouselModule} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-container',
  standalone: true,
  imports: [
    AdditionalItemComponent,
    TranslocoDirective,
    CarouselModule
  ],
  templateUrl: './slider-container.component.html',
  styleUrl: './slider-container.component.scss'
})
export class SliderContainerComponent {
}
