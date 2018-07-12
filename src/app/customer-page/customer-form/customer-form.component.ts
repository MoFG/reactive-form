import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  FormArray,
  AbstractControl
} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  @Output() sendData = new EventEmitter();


  pattern = /^[^*|":<>[\]{}.,?/`~¥£€\\()';@&$!#%^*_+=0-9-]+$/;

  // pattern2 = /^[^*|:<>[\]{}.,?/`~¥£€\\';@&$!#%^*+=()”]+$/;

  items: any[] = [];

  customerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  middleName: FormControl;
  gender: FormControl;
  occupation: FormControl;
  dob: FormControl;

  maxDate = new Date();
  minDate = new Date(
    new Date().getFullYear() - 100,
    new Date().getMonth(),
    new Date().getDate() + 1
  );

  selectedYear: number;
  result: number;
  _flag = true;

  constructor(private fb: FormBuilder) {
    this.firstName = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    this.middleName = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    this.gender = new FormControl('', Validators.required);
    this.occupation = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    this.dob = new FormControl('', Validators.required);

  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      gender: this.gender,
      occupation: this.occupation,
      dob: this.dob,
      items: this.fb.array([this.createForm()])
    });
  }

  createForm(): FormGroup {
    return this.fb.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      gender: this.gender,
      occupation: this.occupation,
      dob: this.dob
    });
  }

  addNew(): void {
    this.items = this.customerForm.get('items') as FormArray;
    this.items.push(this.createForm());
  }

  enterDOB(event: any) {
    event.preventDefault();
  }

  selectDOB(event: any) {
    this.selectedYear = event.value.getFullYear();
    this.result = this.maxDate.getFullYear() - this.selectedYear;

    if (this.result < 18) {
      return this._flag = false;
    } else {
      return this._flag = true;
    }
  }

}
