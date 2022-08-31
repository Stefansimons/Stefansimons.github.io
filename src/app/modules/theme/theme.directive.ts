import { ThemeService } from './theme.service';
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Theme } from './models';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnInit {
  private unsubscribe = new Subject();
  constructor(
    private _elementRef: ElementRef,
    private _themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const active = this._themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }

    this._themeService.themeChange
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  updateTheme(theme: Theme) {
    for (const key in theme.properties) {
      this._elementRef.nativeElement.style.setProperty(
        key,
        theme.properties[key]
      );

      this.renderer.setStyle(
        document.body,
        'background-color',
        theme.properties['--main-bg-color']
      );
    }
  }
}
