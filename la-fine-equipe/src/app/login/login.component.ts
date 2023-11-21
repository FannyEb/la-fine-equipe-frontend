import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
  template: `
    <form
      (ngSubmit)="onSubmit()"
      #loginForm="ngForm"
      class="form"
      [formGroup]="logInForm"
    >
      <h1 class="form__heading">Connexion</h1>
      <div class="form__group">
        <div class="alert" *ngIf="securityNumberControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="securityNumber"
          id="securityNumber"
          [(ngModel)]="user.securityNumber"
          name="securityNumber"
          class="form__input"
          placeholder="Numéro de Sécurité Sociale"
          required
          formControlName="securityNumber"
        />
        <label for="securityNumber" class="form__label"
          >Numéro de Sécurité Sociale
        </label>
      </div>
      <div class="form__group">
        <div class="alert" *ngIf="passwordControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="password"
          id="password"
          [(ngModel)]="user.password"
          name="password"
          class="form__input"
          placeholder="Mot de passe"
          required
          formControlName="password"
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
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  logInForm: FormGroup;
  securityNumberControl = new FormControl(Validators.required);
  passwordControl = new FormControl(Validators.required);

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      securityNumber: this.securityNumberControl,
      password: this.passwordControl,
    });
  }

  onSubmit() {
    if (!this.logInForm.invalid) {
      this.userService.signin(this.user).subscribe(
        (data) => {
          console.log('signin data', data);
          localStorage.setItem(
            'userName',
            `${data.user.firstName} ${data.user.lastName}`
          );
          localStorage.setItem('secNumber', data.user.securityNumber);
          this.router.navigate(['/', 'landing']);
        },
        (error) => {
          console.log('signin error', error);
        }
      );
    }
  }
}
