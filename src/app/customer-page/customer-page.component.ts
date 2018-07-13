import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '../../../node_modules/@angular/forms';
import { Customer } from '../model/customer';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit, OnChanges{

  userData: Customer[] = [];
  public customerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  middleName: FormControl;
  gender: FormControl;
  occupation: FormControl;
  dob: FormControl;
  mode = ['owner', 'insured', 'dependent'];
  pattern = /^[^*|":<>[\]{}.,?/`~¥£€\\()';@&$!#%^*_+=0-9-]+$/;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(this.pattern)]],
      middleName: ['', [Validators.required, Validators.pattern(this.pattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.pattern)]],
      gender: ['', Validators.required],
      occupation: ['', [Validators.required, Validators.pattern(this.pattern)]],
      dob: ['', Validators.required],
      insured: this.fb.array([this.createForm()])
    });
  }

  ngOnChanges() {
    console.log(this.userData);
    
  }

  createForm() {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(this.pattern)]],
      middleName: ['', [Validators.required, Validators.pattern(this.pattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.pattern)]],
      gender: ['', Validators.required],
      occupation: ['', [Validators.required, Validators.pattern(this.pattern)]],
      dob: ['', Validators.required]
    });
  }

  addNew() {
    const control = <FormArray>this.customerForm.controls['insured'];
    control.push(this.createForm());
    let object = {
      firstName: control.value.firstName,
      lastName: control.value.lastName,
      middleName: control.value.middleName,
      gender: control.value.gender,
      occupation: control.value.occupation,
      dob: control.value.dob
    }
    object = control.value;
    this.userData.push(object);
  }

  removeForm(i: number) {
    const control = <FormArray>this.customerForm.controls['insured'];
    control.removeAt(i);
  }

}
