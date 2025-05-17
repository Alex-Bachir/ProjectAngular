import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {

}


//Une interface ne contient QUE des types
export interface ConnexionService {
  connexion: () => any
  deconnexion: () => any
  urldeconnexion:string;
}
// On dit qu'on implémente une autre interface et c'est que une classe
//qui peut implémenter une interface
export class ConnexionViaFacebook implements ConnexionService {
  urldeconnexion= "facebook";
  public connexion() {
    return "je me connecte via facebook"
  }
  public deconnexion() {
    return "je me connecte via facebook"
  }
  
}

export class ConnexionViaGoogle implements ConnexionService {
  urldeconnexion= "google";
  public connexion() {
    return "je me connecte via google"
  }
  public deconnexion() {
    return "je me connecte via google"
  }
  
}
// On hérite TOUJOURS d'une classe
export class Voiture {
  moteur = 'un moteur à essence'
  numberRoue = 4;
  carrosserie = 'métal'
  constructor(moteur: string, numberRoue:number, carrosserie: string) {
    this.moteur = moteur;
    this.numberRoue = numberRoue;
    this.carrosserie = carrosserie;
  }
  public rouler() {
    console.log("voiture qui roule");
  }

  public freiner() {
    console.log("voiture qui freine");
  }

  static coucou() {
    console.log('coucou')
  }
}

export class VoitureElectrique extends Voiture {
  cable = true;
  override moteur = 'électrique'

  public override rouler() {
    super.rouler()
    console.log("et je roule mieux");
    //ça affichera : 
    //voiture qui roule
    //et je roule mieux
  }

  public override freiner() {
    console.log("je freine vraiment");
    //resultat : je freine vraiment
  }
}