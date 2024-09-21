import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Event emitter to pass data between components
  dataEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  // Method to emit data
  sendData(data: any) {
    this.dataEmitter.emit(data);
  }

  // Method to return the EventEmitter
  getDataEmitter() {
    return this.dataEmitter;
  }
}
