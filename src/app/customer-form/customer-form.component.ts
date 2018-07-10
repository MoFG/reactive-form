import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  pattern = /^[^*|":<>[\]{}.,?/`~¥£€\\()';@&$!#%^*_+=0-9-]+$/;
  customerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  middleName: FormControl;
  gender: FormControl;
  occupation: FormControl;
  dob: FormControl;


  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      middleName: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      gender: new FormControl('', Validators.required),
      occupation: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }


}
