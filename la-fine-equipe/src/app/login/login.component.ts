import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="login-container">
      <h1>Connexion</h1>

      <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="login-form">
        <div class="form-group">
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            [(ngModel)]="user.socialSecurityNumber"
            name="email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            [(ngModel)]="user.password"
            name="password"
            required
          />
        </div>

        <button type="submit" class="submit-button">Se connecter</button>

        <p>Si ce n'est pas déjà fait :</p>
        <a [routerLink]="['/signin']">Créer un compte</a>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = {
    socialSecurityNumber: '',
    password: '',
  };

  onSubmit() {
    // Logique pour la connexion par la suite
  }
}
