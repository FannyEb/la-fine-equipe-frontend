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
        <input
          type="text"
          [(ngModel)]="user.securityNumber"
          required
          name="securityNumber"
        />
      </div>

      <div class="form-group">
        <label>Mot de Passe:</label>
        <input
          type="password"
          [(ngModel)]="user.password"
          required
          name="password"
        />
      </div>

      <div class="form-group">
        <label>Nom:</label>
        <input
          type="text"
          [(ngModel)]="user.lastName"
          required
          name="lastname"
        />
      </div>

      <div class="form-group">
        <label>Prénom:</label>
        <input
          type="text"
          [(ngModel)]="user.firstName"
          required
          name="firstname"
        />
      </div>

      <button type="submit" class="submit-button">Soumettre</button>
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
