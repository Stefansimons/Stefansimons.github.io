import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private _toggle: boolean = false;
  private _isToggleSidebar = new BehaviorSubject<boolean>(false);
  public readonly isToggleSidebar$ = this._isToggleSidebar.asObservable();
  constructor() {}

  /**
   *
   */
  onToogleSidebar() {
    this._toggle = !this._toggle;
    this._isToggleSidebar.next(this._toggle);
  }
}
