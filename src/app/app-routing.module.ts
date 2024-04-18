import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './MAIN/pages/home-page/home-page.component';
import { AboutMeComponent } from './MAIN/components/About-me/About-me.component';
import { SkillsComponent } from './MAIN/components/skills/skills.component';
import { CurriculumComponent } from './MAIN/components/curriculum/curriculum.component';
import { PortafolioComponent } from './MAIN/components/portafolio/portafolio.component';
import { ContactoComponent } from './MAIN/components/contacto/contacto.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomePageComponent },
  { path: 'sobremi', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'portfolio', component: PortafolioComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
