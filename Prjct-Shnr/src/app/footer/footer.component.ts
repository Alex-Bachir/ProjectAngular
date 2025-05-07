import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `<div class="bandeau">
    <p>Bandeau</p>
    <p>qui defile</p>
    <p>facebook etc</p>
</div>

<!-- Footer -->
<footer class="footer">
    <div class="footer-section">
        <h3>Information</h3>
        <p>Studio Shinra</p>
        <p>06.80.50.50.53</p>
        <a href="mailto:contact@studio-shinra.fr">contact@studio-shinra.fr</a>
    </div>

    <div class="footer-section">
        <h3>Votre compte</h3>
        <a href="#">Information personnelles</a>
        <a href="#">Commandes</a>
        <a href="#">Liste de souhaits</a>
    </div>

    <div class="footer-section">
        <h3>Notre société</h3>
        <a href="#">Conditions Générales</a>
        <a href="#">Paiement sécurisé</a>
        <a href="#">F.A.Q</a>
    </div>

    <div class="copyright">
        &copy; 2025 - Studio SHINRA
    </div>`,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
