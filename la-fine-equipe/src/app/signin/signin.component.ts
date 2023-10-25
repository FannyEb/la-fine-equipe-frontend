import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <h1>Inscription</h1>

    <p>Vous avez déjà un compte :</p>
    <a [routerLink]="['/login']"> Connectez-vous </a>

    <form
      (ngSubmit)="onSubmit()"
      #utilisateurForm="ngForm"
      class="inscription-form"
    >
      <div class="form-group">
        <label>Numéro de Sécurité Sociale:</label>
        <input type="text" [(ngModel)]="user.socialSecurityNumber" required />
      </div>

      <div class="form-group">
        <label>Mot de Passe:</label>
        <input type="password" [(ngModel)]="user.password" required />
      </div>

      <div class="form-group">
        <label>Nom:</label>
        <input type="text" [(ngModel)]="user.lastName" required />
      </div>

      <div class="form-group">
        <label>Prénom:</label>
        <input type="text" [(ngModel)]="user.firstName" required />
      </div>

      <button type="submit" class="submit-button">Soumettre</button>
    </form>
  `,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  user: User = {
    socialSecurityNumber: '',
    password: '',
    lastName: '',
    firstName: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Données soumises:', this.user);
    this.router.navigate(['/']);
  }
}
