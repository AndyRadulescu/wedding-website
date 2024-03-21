import {AfterViewInit, Component, ElementRef, forwardRef, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TranslocoDirective, TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-diet-selector',
  standalone: true,
  imports: [
    FormsModule,
    TranslocoPipe,
    TranslocoDirective
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DietSelectorComponent),
      multi: true
    }
  ],
  templateUrl: './diet-selector.component.html',
  styleUrl: './diet-selector.component.scss'
})
export class DietSelectorComponent implements ControlValueAccessor, AfterViewInit {
  public value = false;

  @ViewChild('dietSelect', {static: true}) dietSelect!: ElementRef<HTMLInputElement>;

  public onSelectItem($event: Event) {
    const val = ($event.target as any).value;
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }

  ngAfterViewInit(): void {
    this.dietSelect.nativeElement.checked = this.value;
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
