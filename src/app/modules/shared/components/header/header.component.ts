import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private helperS: HelperService) {}

  ngOnInit(): void {}
  /**
   *
   */
  onToggleSidebar() {
    this.helperS.onToogleSidebar();
  }
}
