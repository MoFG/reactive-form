import { Injectable, EventEmitter, Output } from "../../../node_modules/@angular/core";
import { Customer } from "../model/customer";

@Injectable()
export class EventEmitService {

    @Output() customerData = new EventEmitter<Customer>();
    
}