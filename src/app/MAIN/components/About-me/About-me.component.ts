import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './About-me.component.html',
  styleUrl: './About-me.component.css'
})



export class AboutMeComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/RESUME KEVIN CASTRO';
    link.download = 'RESUME KEVIN CASTRO.pdf';
    link.click();
  }

}


