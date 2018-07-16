import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '../../../node_modules/@angular/forms';
import { Customer } from '../model/customer';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  userData:               Customer;
  customerInfo:           Customer;
  public customerForm:    FormGroup;
  firstName:              FormControl;
  lastName:               FormControl;
  middleName:             FormControl;
  gender:                 FormControl;
  occupation:             FormControl;
  dob:                    FormControl;

  mode =      ['owner', 'insured', 'dependent'];
  pattern =   /^[^*|":<>[\]{}.,?/`~¥£€\\()';@&$!#%^*_+=0-9-]+$/;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      insured: this.fb.array([this.createForm()])
    });
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
    this.userData = this.customerForm.controls['insured'].value;
  }

  removeForm(i: number) {
    const control = <FormArray>this.customerForm.controls['insured'];
    control.removeAt(i);
  }

  recivedCustomerInfo(data) {
    this.customerInfo = data;
  }

}
