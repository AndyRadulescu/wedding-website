import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit{
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
