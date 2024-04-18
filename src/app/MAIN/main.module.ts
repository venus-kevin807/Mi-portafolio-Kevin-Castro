import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/About-me/About-me.component';
import { AppRoutingModule } from '../app-routing.module';
import { SkillsComponent } from './components/skills/skills.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './components/contacto/services/contact.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [HomePageComponent, AboutMeComponent, SkillsComponent, CurriculumComponent, PortafolioComponent, ContactoComponent],
  declarations: [HomePageComponent, AboutMeComponent, SkillsComponent, CurriculumComponent, PortafolioComponent, ContactoComponent],
  providers: [],
})
export class MainModule { }
