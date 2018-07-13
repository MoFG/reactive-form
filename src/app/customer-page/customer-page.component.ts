import { Component, OnInit } from '@angular/core';
import { EventEmitService } from '../event-emit.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '../../../node_modules/@angular/forms';
import { Customer } from '../model/customer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  public customerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  middleName: FormControl;
  gender: FormControl;
  occupation: FormControl;
  dob: FormControl;

  // customerArray: Customer[] = [];
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

  receiveData(event) {
    // this.customerArray = event;
    // console.log(this.customerArray);
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

  save(model: Customer) {
    console.log('Save customer: ' + model);
  }

  addNew() {
    const control = <FormArray>this.customerForm.controls['insured'];
    control.push(this.createForm());
  }

  removeForm(i: number) {
    const control = <FormArray>this.customerForm.controls['insured'];
    control.removeAt(i);
  }

}
