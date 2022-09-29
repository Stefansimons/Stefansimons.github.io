import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Output() hideHamburgerMenuEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
  /**
   * it hides hamburger menu by click on link
   */
  hideHamburgerMenu() {
    this.hideHamburgerMenuEvent.emit(false);
  }
}
