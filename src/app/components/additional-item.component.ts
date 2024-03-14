import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-additional-item',
  standalone: true,
  imports: [],
  templateUrl: './additional-item.component.html',
  styleUrl: './additional-item.component.scss'
})
export class AdditionalItemComponent {
  @Input('title') title!: string;
  @Input('content') content!: string;
}
