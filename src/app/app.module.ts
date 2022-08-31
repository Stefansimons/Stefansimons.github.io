import { darkTheme } from './modules/theme/dark-theme';
import { lightTheme } from './modules/theme/light-theme';
import { ThemeModule } from './modules/theme/theme.module';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
