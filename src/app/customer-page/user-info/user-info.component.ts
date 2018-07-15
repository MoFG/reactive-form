import { Component, OnInit, Input} from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{

  @Input() info: Customer;
  constructor() {
  }

  ngOnInit() {
  }

}
