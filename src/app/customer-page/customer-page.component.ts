import { Component, OnInit } from '@angular/core';
import { EventEmitService } from '../event-emit.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { Customer } from '../model/customer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  customerArray: Customer[] = [];

  constructor() {}

  ngOnInit() {
  }

  receiveData(event) {
    this.customerArray = event;
    console.log(this.customerArray);
    
  }





}
