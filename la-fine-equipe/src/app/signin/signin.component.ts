import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <form (ngSubmit)="onSubmit()" #utilisateurForm="ngForm" class="form">
      <h1 class="form__heading">Inscription</h1>

      <div class="form__group">
        <input
          type="securityNumber"
          id="securityNumber"
          [(ngModel)]="user.securityNumber"
          name="email"
          class="form__input"
          placeholder="Numéro de Sécurité Sociale"
          required
        />
        <label for="securityNumber" class="form__label">
          Numéro de Sécurité Sociale
        </label>
      </div>

      <div class="form__group">
        <input
          type="password"
          id="password"
          [(ngModel)]="user.password"
          name="password"
          class="form__input"
          placeholder="Mot de Passe"
          required
        />
        <label for="password" class="form__label">Mot de Passe</label>
      </div>

      <div class="form__group">
        <input
          type="text"
          [(ngModel)]="user.lastName"
          required
          class="form__input"
          placeholder="Nom de famille"
          name="lastname"
        />
        <label for="lastName" class="form__label">Nom de famille</label>
      </div>

      <div class="form__group">
        <input
          type="text"
          [(ngModel)]="user.firstName"
          class="form__input"
          placeholder="Prénom"
          required
          name="firstname"
        />
        <label for="firstName" class="form__label">Prénom</label>
      </div>
      <button type="submit" class="btn btn--large btn--color submit-button">
        Soumettre
      </button>
      <div class="form__group">
        <p>Vous avez déjà un compte :</p>
        <a [routerLink]="['/login']"> Connectez-vous </a>
      </div>
    </form>
  `,
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  user: User = new User();

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    console.log('Données soumises:', this.user);

    this.userService.signup(this.user).subscribe((data) => {
      this.userService.signin(this.user).subscribe((data) => {
        console.log('signin data', data);
        localStorage.setItem(
          'userName',
          `${data.user.firstName} ${data.user.lastName}`
        );
        this.router.navigate(['/', 'landing']);
      });
    });
  }
}
