import { ServicesComponent } from './components/services/services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ServicesComponent,
    EducationComponent,
    WorkExperienceComponent,
    ContactComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, FormsModule],
  exports: [
    FooterComponent,
    HomeComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ServicesComponent,
  ],
})
export class SharedModule {}
