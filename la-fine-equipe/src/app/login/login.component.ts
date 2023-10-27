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
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="form">
        <h1 class="form__heading">Connexion</h1>
        <div class="form__group">
          <input
            type="email"
            id="email"
            [(ngModel)]="user.socialSecurityNumber"
            name="email"
            class="form__input"
            placeholder="Email"
            required
          />
          <label for="email" class="form__label">Email</label>
        </div>
        <div class="form__group">
          <input
            type="password"
            id="password"
            [(ngModel)]="user.password"
            name="password"
            class="form__input"
            placeholder="Mot de passe"
            required
          />
          <label for="password" class="form__label">Mot de passe</label>
        </div>
        <button type="submit" class="btn btn--large btn--color submit-button">
          Se connecter
        </button>
        <div class="form__group">
          <p>Si ce n'est pas déjà fait :</p>
          <a [routerLink]="['/signin']">Créer un compte</a>
        </div>
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
