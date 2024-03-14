import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CardComponent} from "../components/card.component";
import {FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators} from "@angular/forms";
import {SwitchComponent} from "../components/switch.component";

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent,
    ReactiveFormsModule,
    SwitchComponent
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  public rsvpForm = new FormGroup({
    name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.min(6), Validators.required]),
    plus1: new FormControl<boolean>(false, [Validators.required]),
    kids: new FormControl<boolean>(false, [Validators.required]),
    diet: new FormControl<string | null>(null, []),
    anythingElse: new FormControl<string>('', []),
  });
  protected readonly onsubmit = onsubmit;

  public onSubmit() {
    console.log(this.rsvpForm.value)
  }
}
