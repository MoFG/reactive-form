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
  // tslint:disable-next-line:component-selector
  // moduleId: module.id,
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  // @Output() sendData = new EventEmitter<Customer[]>();
  @Input('group')
  public insuredForm: FormGroup;
  
  // count = 0;
  // pattern = /^[^*|":<>[\]{}.,?/`~¥£€\\()';@&$!#%^*_+=0-9-]+$/;

  // pattern2 = /^[^*|:<>[\]{}.,?/`~¥£€\\';@&$!#%^*+=()”]+$/;

  // items: any[] = [];

  // customerForm: FormGroup;
  // firstName: FormControl;
  // lastName: FormControl;
  // middleName: FormControl;
  // gender: FormControl;
  // occupation: FormControl;
  // dob: FormControl;

  maxDate = new Date();
  minDate = new Date(
    new Date().getFullYear() - 100,
    new Date().getMonth(),
    new Date().getDate() + 1
  );

  selectedYear: number;
  result: number;
  _flag = true;
  customer: Customer[] = [];


  constructor(private fb: FormBuilder) {
    // this.firstName = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    // this.lastName = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    // this.middleName = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    // this.gender = new FormControl('', Validators.required);
    // this.occupation = new FormControl('', [Validators.required, Validators.pattern(this.pattern)]);
    // this.dob = new FormControl('', Validators.required);
  }

  ngOnInit() {
    // this.customerForm = this.fb.group({
    //   firstName: this.firstName,
    //   middleName: this.middleName,
    //   lastName: this.lastName,
    //   gender: this.gender,
    //   occupation: this.occupation,
    //   dob: this.dob,
    //   items: this.fb.array([this.createForm()])
    // });
  }

  // createForm(): FormGroup {
  //   return this.fb.group({
  //     firstName: this.firstName,
  //     middleName: this.middleName,
  //     lastName: this.lastName,
  //     gender: this.gender,
  //     occupation: this.occupation,
  //     dob: this.dob
  //   });
  // }


  // addNew(): void {
  //   this.count = this.count + 1;
  //   const object = {
  //     firstName: this.customerForm.value.firstName,
  //     lastName: this.customerForm.value.lastName,
  //     middleName: this.customerForm.value.middleName,
  //     gender: this.customerForm.value.gender,
  //     occupation: this.customerForm.value.occupation,
  //     dob: this.customerForm.value.dob
  //   };
  //   this.customer.push(object);
  //   if (this.count < 3) {
  //     this.items = this.customerForm.get('items') as FormArray;
  //     this.items.push(this.createForm());
  //   }
  //   this.sendData.emit(this.customer);
  // }

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
