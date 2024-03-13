import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CardComponent} from "../components/card.component";

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {

}
