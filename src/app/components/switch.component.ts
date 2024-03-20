import {AfterViewInit, Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent implements ControlValueAccessor, AfterViewInit {
  @Input('title') title: string = '';
  @Input('text') text: string = '';

  @ViewChild('checkboxEl', {static: true}) checkboxEl!: ElementRef;

  public value = false;

  ngAfterViewInit(): void {
    this.checkboxEl.nativeElement.checked = this.value;
  }

  public onChecked($event: Event) {
    const val = ($event.target as any).checked;
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange = (value: boolean) => {
  };

  private onTouched = () => {
  };
}
