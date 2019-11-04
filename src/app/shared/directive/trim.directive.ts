import { Directive, Input, forwardRef, Renderer2, ElementRef, HostListener, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const TRIM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TrimDirective),
  multi: true
};

@Directive({
  selector: 'input[appTrim],textarea[appTrim]',
  providers: [ TRIM_VALUE_ACCESSOR ]
})
export class TrimDirective implements ControlValueAccessor {
  @Input() readonly: any;
  private changeFunc = (v: any) => {};
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  registerOnChange(func: (_: any) => void) {
    this.changeFunc = func;
  }

  registerOnTouched(func: (_: any) => void) {}

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : ('' + value).trim();
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }
  @HostListener('change', [ '$event.target.value' ])
  @HostListener('blur', [ '$event.target.value' ])
  handleChange(value: string) {
    if (this.readonly) {
      return;
    }
    const filterVal = ('' + value).trim();
    this.changeFunc(filterVal);
    if (filterVal !== value) {
      this.writeValue(filterVal);
    }
  }

  @HostListener('input', [ '$event.target.value' ])
  handleInput(value: string) {
    if (this.readonly) {
      return;
    }
    this.changeFunc(value);
  }
}
