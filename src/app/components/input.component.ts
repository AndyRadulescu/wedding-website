import {Component, ElementRef, forwardRef, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('inputValue', {static: true}) inputValue!: ElementRef<HTMLInputElement>;
  public inputText = '';
  public isDisabled = false;

  public onTextChange(value: string) {
    this.inputText = value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.inputText = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  private onChange = (value: string) => {
  };

  private onTouched = () => {
  };
}
