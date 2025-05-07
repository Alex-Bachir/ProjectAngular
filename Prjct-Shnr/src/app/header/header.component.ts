import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `<nav class="navbar">
    <div class="logo">
      <img src="StudioShinra.png" alt="Logo" />
    </div>
    <div class="nav-links">
      <a href="#">Mon Compte</a>
      <a href="#">Article</a>
    </div>
    
  </nav>
  <nav class ="navbar2">
    <div class="search-bar">
      <form action="/rechercher" method="GET">
        <input type="text" name="q" placeholder="Rechercher">
      </form>
    </div>
    <div class = "btn">
      <button class="catalogue-button">
        Catalogue
      </button>
    </div>
  </nav>`,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
