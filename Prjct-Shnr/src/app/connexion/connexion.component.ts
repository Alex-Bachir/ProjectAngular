import { Component, inject } from '@angular/core';
import { ConnexionService } from '../services/connexion/connexion.service';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  private connexionService = inject(ConnexionService);

  connexion() {
    this.connexionService.changeConnexion(true);
   }
}
