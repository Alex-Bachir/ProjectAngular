import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `<nav class="navbar">
  <div class="logo">
    <img src="StudioShinra.png" alt="Logo" />
  </div>
  <div class="nav-links">
    <a href="#">Mon Compte</a>
    <a href="#">Article</a>
  </div>
</nav>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prjct-Shnr';
}
