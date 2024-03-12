import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'card-invitation',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-invitation.component.html',
  styleUrl: './card-invitation.component.scss'
})
export class CardInvitationComponent {

}
