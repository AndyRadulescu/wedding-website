import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input('formControlInput') formControl!: FormControl;
  @Input('displayText') displayText!: string;
  @Input('type') type!: string;
  @Input('autocomplete') autocomplete!: string;
  @Input('placeholder') placeholder!: string;
  @Input('inputMode') inputMode!: string;
}
