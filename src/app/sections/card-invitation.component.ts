import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@ngneat/transloco";
import {CardComponent} from "../components/card.component";

@Component({
  selector: 'card-invitation',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslocoPipe,
    CardComponent
  ],
  templateUrl: './card-invitation.component.html',
  styleUrl: './card-invitation.component.scss'
})
export class CardInvitationComponent {

}
