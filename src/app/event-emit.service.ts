import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitService {

  dataSrc = new EventEmitter();

  constructor() { }

  sendMessage(data: any) {
    this.dataSrc.emit(data);
  }
}
