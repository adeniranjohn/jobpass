import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { TypeformComponent } from './typeform/typeform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ResumeComponent, TypeformComponent],
  imports: [CommonModule, ResumeRoutingModule, FormsModule],
})
export class ResumeModule {}
