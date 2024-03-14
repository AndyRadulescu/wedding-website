import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {CardComponent} from "../components/card.component";
import {FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators} from "@angular/forms";
import {SwitchComponent} from "../components/switch.component";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent,
    ReactiveFormsModule,
    SwitchComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent implements OnInit, OnDestroy {
  public rsvpForm = new FormGroup({
    name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.min(6), Validators.required]),
    plus1: new FormControl<boolean>({value: false, disabled: true}, [Validators.required]),
    plus1Name: new FormControl<string>('', []),
    kids: new FormControl<boolean>({value: false, disabled: true}, [Validators.required]),
    kidsName: new FormControl<string>('', []),
    diet: new FormControl<string | null>('none', []),
    anythingElse: new FormControl<string>('', []),
  });
  protected readonly onsubmit = onsubmit;

  private subscription = new Subject<void>();

  ngOnInit(): void {
    this.rsvpForm.get('plus1')?.valueChanges.pipe(takeUntil(this.subscription)).subscribe((change) => {
      change === true ? this.rsvpForm.get('plus1Name')?.enable() : this.rsvpForm.get('plus1Name')?.disable();
    });
    this.rsvpForm.get('kids')?.valueChanges.pipe(takeUntil(this.subscription)).subscribe((change) => {
      change === true ? this.rsvpForm.get('kidsName')?.enable() : this.rsvpForm.get('kidsName')?.disable();
    })
  }

  ngOnDestroy(): void {
    this.subscription.next();
  }


  public onSubmit() {
    if (this.rsvpForm.invalid) {
      console.log('invalid');
    }
    console.log(this.rsvpForm.value)
  }
}
