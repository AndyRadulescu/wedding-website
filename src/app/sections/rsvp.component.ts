import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {CardComponent} from '../components/card.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SwitchComponent} from '../components/switch.component';
import {Subject, takeUntil} from 'rxjs';
import {DietSelectorComponent} from '../components/diet-selector.component';
import {InputComponent} from '../components/input.component';
import {TranslocoDirective, TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CardComponent,
    ReactiveFormsModule,
    SwitchComponent,
    NgClass,
    NgIf,
    DietSelectorComponent,
    InputComponent,
    TranslocoPipe,
    TranslocoDirective
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent implements OnInit, OnDestroy {
  public rsvpForm = new FormGroup({
    name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.min(6), Validators.required]),
    myDiet: new FormControl<string | null>('none', []),
    plus1Enabled: new FormControl<boolean>({value: false, disabled: true}, [Validators.required]),
    plus1: new FormGroup({
      plus1Name: new FormControl<string>({value: '', disabled: true}, [Validators.required]),
      plus1Diet: new FormControl<string | null>({value: 'none', disabled: true}, []),
    }),
    kidsEnabled: new FormControl<boolean>(false, [Validators.required]),
    kids: new FormGroup({
      kidsName: new FormControl<string>({value: '', disabled: true}, [Validators.required]),
      kidsDiet: new FormControl<string | null>({value: 'none', disabled: true}, []),
    }),
    anythingElse: new FormControl<string>('', []),
  });
  protected readonly onsubmit = onsubmit;

  private subscription = new Subject<void>();

  ngOnInit(): void {
    this.rsvpForm.get('plus1Enabled')?.valueChanges.pipe(takeUntil(this.subscription)).subscribe((change) => {
      change === true ? this.rsvpForm.get('plus1')?.enable() : this.rsvpForm.get('plus1')?.disable();
    });
    this.rsvpForm.get('kidsEnabled')?.valueChanges.pipe(takeUntil(this.subscription)).subscribe((change) => {
      change === true ? this.rsvpForm.get('kids')?.enable() : this.rsvpForm.get('kids')?.disable();
    });
  }

  ngOnDestroy(): void {
    this.subscription.next();
  }


  public onSubmit() {
    if (this.rsvpForm.invalid) {
      console.log('invalid');
    }
    console.log(this.rsvpForm.value);
  }
}
