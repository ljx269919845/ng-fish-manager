import {
  Directive,
  Input,
  SimpleChanges,
  OnChanges,
  forwardRef,
  Renderer2,
  ElementRef,
  HostListener,
  Renderer
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const PATTERN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PatternInputDirective),
  multi: true
};

@Directive({
  selector: 'input[appPatternInput]',
  providers: [ PATTERN_VALUE_ACCESSOR ]
})
export class PatternInputDirective implements OnChanges, ControlValueAccessor {
  @Input() appPatternInput: string | RegExp;
  @Input() readonly;
  @Input() inputPattern: string | RegExp;
  private filterPattern: RegExp; // 输入完成后的正则过滤
  private inputingPattern: RegExp; // 输入中的正则过滤
  private touchFunc = (v: any) => {};
  private changeFunc = (v: any) => {};
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('appPatternInput' in changes && changes.appPatternInput.currentValue) {
      if (this.appPatternInput instanceof RegExp) {
        this.filterPattern = this.appPatternInput;
      } else if (typeof this.appPatternInput === 'string') {
        this.filterPattern = new RegExp(this.appPatternInput);
      } else {
        console.error('appPatternInput should input a string regexp or a regexp object');
      }
    }
    if (this.appPatternInput || this.inputPattern) {
      if (this.inputPattern instanceof RegExp) {
        this.inputingPattern = this.inputPattern;
      } else if (typeof this.inputPattern === 'string') {
        this.inputingPattern = new RegExp(this.inputPattern);
      } else {
        console.error('inputPattern should input a string regexp or a regexp object');
      }
    } else {
      this.inputingPattern = this.filterPattern;
    }
  }

  registerOnChange(func: (_: any) => void) {
    this.changeFunc = func;
  }

  registerOnTouched(func: (_: any) => void) {
    this.touchFunc = func;
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : this.filterValue(value, this.filterPattern);
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }
  @HostListener('change', [ '$event.target.value' ])
  @HostListener('blur', [ '$event.target.value' ])
  handleChange(value) {
    if (this.readonly) {
      return;
    }
    const filterVal = this.filterValue(value, this.filterPattern);
    this.changeFunc(filterVal);
    this.touchFunc(filterVal);
    if (filterVal !== value) {
      this.writeValue(filterVal);
    }
  }

  @HostListener('input', [ '$event.target.value' ])
  handleInput(value) {
    if (this.readonly) {
      return;
    }
    const filterVal = this.filterValue(value, this.inputingPattern);
    this.changeFunc(filterVal);
    if (filterVal !== value) {
      this.writeValue(filterVal);
    }
  }

  private filterValue(value: string, pattern: RegExp) {
    if (!pattern || !value) {
      return value;
    }
    let srcValue = '' + value;
    while (!pattern.test(srcValue) && srcValue) {
      srcValue = srcValue.substr(0, srcValue.length - 1);
    }
    return srcValue;
  }
}
