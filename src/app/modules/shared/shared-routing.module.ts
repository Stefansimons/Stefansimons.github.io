import { ContactComponent } from './components/contact/contact.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'work',
    component: WorkExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
