import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CVKEVIN.pdf';
    link.download = 'CVKEVIN.pdf';
    link.target = '_blank';
    link.click();
  }
}
