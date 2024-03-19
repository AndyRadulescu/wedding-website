import { Component } from '@angular/core';
import {AdditionalItemComponent} from './additional-item.component';

@Component({
  selector: 'app-slider-container',
  standalone: true,
    imports: [
        AdditionalItemComponent
    ],
  templateUrl: './slider-container.component.html',
  styleUrl: './slider-container.component.scss'
})
export class SliderContainerComponent {

}
