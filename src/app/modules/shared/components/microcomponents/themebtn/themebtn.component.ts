import { ThemeService } from './../../../../theme/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themebtn',
  templateUrl: './themebtn.component.html',
  styleUrls: ['./themebtn.component.scss'],
})
export class ThemebtnComponent implements OnInit {
  constructor(private themeService: ThemeService) {}
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
