import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {CardComponent} from '../components/card.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SwitchComponent} from '../components/switch.component';
import {Subject, takeUntil} from 'rxjs';
import {DietSelectorComponent} from '../components/diet-selector.component';
import {InputComponent} from '../components/input.component';
import {TranslocoDirective, TranslocoPipe} from '@ngneat/transloco';
import {collection, getFirestore} from 'firebase/firestore';
import {animate, style, transition, trigger} from '@angular/animations';

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
    TranslocoDirective,
  ],
  animations: [
    trigger(
      'divAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-200px)', width:0, opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', width: '100%', opacity: 1}))
        ]),
      ]
    ),
    trigger(
      'buttonAnimation',[
        transition(':leave', [
          style({transform: 'translateY(0)', height: '0', 'opacity': 1}),
          animate('500ms', style({transform: 'translateY(-500px)', height: '100%', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent implements OnInit, OnDestroy {
  public isSubmitted = false;
  public rsvpForm = new FormGroup({
    name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
    coming: new FormControl<boolean>(true, [Validators.required]),
    myDiet: new FormControl<string | null>('none', []),
    plus1Enabled: new FormControl<boolean>(false, [Validators.required]),
    plus1: new FormGroup({
      plus1Name: new FormControl<string>({value: '', disabled: true}, [Validators.required]),
      plus1Diet: new FormControl<string | null>({value: 'none', disabled: true}, []),
    }),
    kidsEnabled: new FormControl<boolean>(false, [Validators.required]),
    kids: new FormGroup({
      kidsName: new FormControl<string>({value: '', disabled: true}, [Validators.required]),
    }),
    anythingElse: new FormControl<string>('', []),
  });

  private readonly colRef;
  private subscription = new Subject<void>();

  constructor() {
    const db = getFirestore();
    this.colRef = collection(db, 'rsvp');
  }

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
      return;
    }
    this.isSubmitted = true;
    // void addDoc(this.colRef, this.rsvpForm.value);
  }
}
