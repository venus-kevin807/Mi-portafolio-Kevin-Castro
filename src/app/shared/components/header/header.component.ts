import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuVisible: boolean = false;

  // Alternar visibilidad del menú
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  // Cerrar el menú
  closeMenu(): void {
    this.menuVisible = false;
  }
}
