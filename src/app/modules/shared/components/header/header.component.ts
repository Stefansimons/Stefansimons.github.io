import { HelperService } from './../../services/helper.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  showHamburgerMenu = false;
  constructor(private helperS: HelperService) {}

  ngOnInit(): void {}
  /**
   *
   */
  onToggleSidebar() {
    this.helperS.onToogleSidebar();
  }
}
