import { Component, OnInit, Output, EventEmitter, Pipe, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  @Input() mode;
  @Input() group;
  @Input() insured;
  public insuredForm: FormGroup;
  
  maxDate = new Date();
  minDate = new Date(
    new Date().getFullYear() - 100,
    new Date().getMonth(),
    new Date().getDate() + 1
  );

  selectedYear: number;
  result: number;
  _flag = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // console.log(this.mode);
  }

  enterDOB(event: any) {
    event.preventDefault();
  }

  selectDOB(event: any) {
    this.selectedYear = event.value.getFullYear();
    this.result = this.maxDate.getFullYear() - this.selectedYear;

    if (this.result >= 18 && this.result <= 65) {
      return this._flag = true;
    } else {
      return this._flag = false;
    }
  }
}
