import {Component, Directive, ElementRef, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export const CURRENCY_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormCurrencyComponent),
  multi: true
}

@Component({
  selector: 'app-form-currency',
  providers: [CURRENCY_CONTROL_ACCESSOR],
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss']
})

@Directive({
  selector: '[app-form-currency]',
  providers: [
    CURRENCY_CONTROL_ACCESSOR
  ]
})

export class FormCurrencyComponent implements ControlValueAccessor, OnInit {

  currency: string;
  value: string = null;
  isDisabled: boolean = false;
  private el: HTMLInputElement;
  private onTouch: Function;
  private onModelChange: Function;
  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.el = this.elementRef.nativeElement
  }

  firstMortAmt(str: string) {
    //`str = this.numberWithCommas(str)
    //this.value = str
    this.onTouch()
    this.onModelChange('xxx3333xadfdsfdsfx')
    this.el.value = '111333'
    console.log(this.value)

  }

  numberWithCommas(str: string) {
    let currency = parseFloat(str.replace(/,/g, ""))
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return currency
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  writeValue(obj: string): void {
    if(!obj) {
      return
    }
    this.firstMortAmt('')
    console.log('xxxx', obj)
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

}
