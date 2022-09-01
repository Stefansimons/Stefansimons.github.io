import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _isLoading = new BehaviorSubject<boolean>(false);
  public readonly isLoading$ = this._isLoading.asObservable();
  constructor() {}

  showLoader() {
    console.log('show=>');

    this._isLoading.next(true);
  }
  hideLoader() {
    this._isLoading.next(false);
  }
}
