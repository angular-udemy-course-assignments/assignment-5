import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
  private _toInactive = 0;
  private _toActive = 0;

  constructor() {
  }

  get getActiveToInactive(): number {
    return this._toInactive;
  }

  get getInactiveToActive(): number {
    return this._toActive;
  }

  incrementToActive() {
    this._toActive++;
  }

  incrementToInactive() {
    this._toInactive++;
  }
}
