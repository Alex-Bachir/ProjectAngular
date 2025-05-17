import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ConnexionService } from '../services/connexion/connexion.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    // à copier dans connexion.component.ts
   private connexionService = inject(ConnexionService);
   public isConnected: boolean = false;
   private subscription!: Subscription;
   constructor() {
    // On s'abonne à la variable qui dit si l'utilisateur est connecté + on stocke l'abonnement
    this.subscription = this.connexionService.isConnected$.subscribe(val => {
      this.isConnected = val;
    }) 
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
   }

   //La partie connexion doit aller dans connexion.component.ts, il faut donc aussi
   //y ramener l'injection du service - voir la déclaration de connexionService -
   connexion() {
    this.connexionService.changeConnexion(true);
   }
   //Une fois que c'est ok, appeler la méthode connexion dans connexion.component.html
   //Remettre le router link sur le bouton "se connecter"

   deconnexion() {
    this.connexionService.changeConnexion(false);
   }
}
