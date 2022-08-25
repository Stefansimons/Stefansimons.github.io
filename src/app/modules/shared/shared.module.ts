import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    FooterComponent,
    HomeComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
  ],
})
export class SharedModule {}
