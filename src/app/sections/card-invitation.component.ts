import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@ngneat/transloco";

@Component({
  selector: 'card-invitation',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslocoPipe
  ],
  templateUrl: './card-invitation.component.html',
  styleUrl: './card-invitation.component.scss'
})
export class CardInvitationComponent {

}
