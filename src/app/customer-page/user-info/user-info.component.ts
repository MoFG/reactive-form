import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnChanges {

  @Input() info: Customer[];
  constructor() { }

  ngOnInit() {
    console.log(this.info);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.info);
  }

}
