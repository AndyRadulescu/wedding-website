import {Component, OnDestroy, OnInit} from '@angular/core';
import {timeUntil, TimeUntil} from '../utils/time-until';
import {interval, startWith, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  public timeUntil: TimeUntil = {days: 0, hours: 0, minutes: 0, seconds: 0};
  private weddingDate = new Date(2024, 6, 23, 16, 0, 0, 0);
  private subscription = new Subject<void>();

  ngOnInit(): void {
    interval(1000).pipe(startWith(timeUntil(this.weddingDate)), takeUntil(this.subscription)).subscribe(() => {
      this.timeUntil = timeUntil(this.weddingDate);
    });
  }

  ngOnDestroy(): void {
    this.subscription.next();
  }
}
