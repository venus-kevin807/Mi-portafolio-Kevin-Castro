import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent{
//Funcion que aplica las animaciones de las habilidades
constructor(private elementRef: ElementRef) {}


@HostListener('window:scroll', [])

onScroll(): void {
  this.efectoHabilidades();
}

efectoHabilidades(): void {

  const skills = this.elementRef.nativeElement.querySelector("#skills");
  const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = this.elementRef.nativeElement.querySelectorAll(".progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("Angular");
    habilidades[3].classList.add("TypeScript");
    habilidades[4].classList.add("Java");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}
}
