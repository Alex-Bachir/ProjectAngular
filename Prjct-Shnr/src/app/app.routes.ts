import { Routes } from '@angular/router';
import { ResultatComponent } from './resultat/resultat.component';
import { DetailComponent } from './detail/detail.component';
import { NewsComponent } from './news/news.component';
import { CompteComponent } from './compte/compte.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';


export const routes: Routes = [
    /** Il faut toujours une route vide, le path vide est le composant par defaut */
    
    { path: '', component: NewsComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'resultat', component: ResultatComponent },
    { path: 'compte', component: CompteComponent},
    { path: 'panier', component: PanierComponent},
    { path: 'catalogue', component: CatalogueComponent},
    { path: 'inscription', component: InscriptionComponent},
    { path: 'connexion', component: ConnexionComponent},
    // si tu mets ça au début, ton localhost va rediriger vers maroute par exemple 
    // { path: '', redirectTo: '/maroute', pathMatch: 'full' }

];
