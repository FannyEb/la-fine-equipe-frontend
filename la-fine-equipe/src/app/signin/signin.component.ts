import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],
  template: `
    <form
      (ngSubmit)="onSubmit()"
      #utilisateurForm="ngForm"
      class="form"
      [formGroup]="signinForm"
    >
      <h1 class="form__heading">Inscription</h1>

      <div class="form__group">
        <div class="alert" *ngIf="securityNumberControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="securityNumber"
          id="securityNumber"
          [(ngModel)]="user.securityNumber"
          name="email"
          class="form__input"
          placeholder="Numéro de Sécurité Sociale"
          required
          formControlName="securityNumber"
        />
        <label for="securityNumber" class="form__label">
          Numéro de Sécurité Sociale
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
          placeholder="Mot de Passe"
          required
          formControlName="password"
        />
        <label for="password" class="form__label">Mot de Passe</label>
      </div>

      <div class="form__group">
        <div class="alert" *ngIf="lastnameControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="text"
          [(ngModel)]="user.lastName"
          required
          class="form__input"
          placeholder="Nom de famille"
          name="lastname"
          formControlName="lastname"
        />
        <label for="lastName" class="form__label">Nom de famille</label>
      </div>

      <div class="form__group">
        <div class="alert" *ngIf="firstnameControl.invalid">
          <i class="fa fa-exclamation"></i>
        </div>
        <input
          type="text"
          [(ngModel)]="user.firstName"
          class="form__input"
          placeholder="Prénom"
          required
          name="firstname"
          formControlName="firstname"
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
export class SigninComponent implements OnInit {
  user: User = new User();

  signinForm: FormGroup;
  securityNumberControl = new FormControl(Validators.required);
  passwordControl = new FormControl(Validators.required);
  lastnameControl = new FormControl(Validators.required);
  firstnameControl = new FormControl(Validators.required);
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      securityNumber: this.securityNumberControl,
      password: this.passwordControl,
      lastname: this.lastnameControl,
      firstname: this.firstnameControl,
    });
  }

  onSubmit() {
    console.log('Données soumises:', this.user);
    if (!this.signinForm.invalid) {
      this.userService.signup(this.user).subscribe((data) => {
        this.userService.signin(this.user).subscribe((data) => {
          console.log('signin data', data);
          localStorage.setItem(
            'userName',
            `${data.user.firstName} ${data.user.lastName}`
          );
          localStorage.setItem('secNumber', data.user.securityNumber);
          this.router.navigate(['/', 'landing']);
        });
      });
    }
  }
}
