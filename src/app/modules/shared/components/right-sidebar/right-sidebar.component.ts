import { ThemeService } from './../../../theme/theme.service';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent implements OnInit {
  constructor(private themeService: ThemeService, private renderer: Renderer2) {
    const active = this.themeService.getActiveTheme();
  }
  ngOnInit(): void {}
  onChangeTheme() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
