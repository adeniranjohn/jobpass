import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { TypeformComponent } from './typeform/typeform.component';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { BiostatusComponent } from './biostatus/biostatus.component';
import { SkillComponent } from './skill/skill.component';


@NgModule({
  declarations: [ResumeComponent, TypeformComponent, EducationComponent, ExperienceComponent, BiostatusComponent, SkillComponent],
  imports: [CommonModule, ResumeRoutingModule, FormsModule],
})
export class ResumeModule {}
