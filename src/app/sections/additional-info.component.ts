import { Component } from '@angular/core';
import {AdditionalItemComponent} from "../components/additional-item.component";
import {SliderContainerComponent} from '../components/slider-container.component';

@Component({
  selector: 'app-additional-info',
  standalone: true,
  imports: [
    AdditionalItemComponent,
    SliderContainerComponent
  ],
  templateUrl: './additional-info.component.html',
  styleUrl: './additional-info.component.scss'
})
export class AdditionalInfoComponent {

}
