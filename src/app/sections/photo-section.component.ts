import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-photo-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './photo-section.component.html',
  styleUrl: './photo-section.component.scss'
})
export class PhotoSectionComponent {

}
