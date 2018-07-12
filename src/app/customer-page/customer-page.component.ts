import { Component, OnInit } from '@angular/core';
import { EventEmitService } from '../event-emit.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
  providers: [EventEmitService]
})
export class CustomerPageComponent implements OnInit {

  constructor(eventEmitService: EventEmitService) { }

  ngOnInit() {
  }

}
